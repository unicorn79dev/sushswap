import { ChainId } from '@sushiswap/core-sdk'
import { aprToApy, getFraction, toAmount } from 'app/functions'
import { GRAPH_HOST } from 'app/services/graph/constants'
import { getTokenSubset } from 'app/services/graph/fetchers'
import {
  bentoBoxQuery,
  bentoStrategiesQuery,
  bentoTokensQuery,
  bentoUserTokensQuery,
  clonesQuery,
  kashiPairsQuery,
  kashiUserPairsQuery,
} from 'app/services/graph/queries/bentobox'

import { pager } from './pager'

export const BENTOBOX = {
  [ChainId.ETHEREUM]: 'lufycz/bentobox',
  [ChainId.XDAI]: 'sushiswap/xdai-bentobox',
  [ChainId.MATIC]: 'lufycz/matic-bentobox',
  [ChainId.FANTOM]: 'sushiswap/fantom-bentobox',
  [ChainId.BSC]: 'sushiswap/bsc-bentobox',
  [ChainId.ARBITRUM]: 'sushiswap/arbitrum-bentobox',
}
const fetcher = async (chainId = ChainId.ETHEREUM, query, variables = undefined) =>
  pager(`${GRAPH_HOST[chainId]}/subgraphs/name/${BENTOBOX[chainId]}`, query, variables)

export const getClones = async (chainId = ChainId.ETHEREUM) => {
  const { clones } = await fetcher(chainId, clonesQuery)
  return clones
}

export const getKashiPairs = async (chainId = ChainId.ETHEREUM, variables = undefined) => {
  const { kashiPairs } = await fetcher(chainId, kashiPairsQuery, variables)

  const tokens = await getTokenSubset(chainId, {
    tokenAddresses: Array.from(
      kashiPairs.reduce(
        (previousValue, currentValue) => previousValue.add(currentValue.asset.id, currentValue.collateral.id),
        new Set() // use set to avoid duplicates
      )
    ),
  })

  return kashiPairs.map((pair) => ({
    ...pair,
    token0: {
      ...pair.asset,
      ...tokens.find((token) => token.id === pair.asset.id),
    },
    token1: {
      ...pair.collateral,
      ...tokens.find((token) => token.id === pair.collateral.id),
    },
    assetAmount: Math.floor(pair.totalAssetBase / getFraction({ ...pair, token0: pair.asset })).toString(),
    borrowedAmount: toAmount(
      {
        elastic: pair.totalBorrowElastic.toBigNumber(0),
        base: pair.totalBorrowBase.toBigNumber(0),
      },
      pair.totalBorrowElastic.toBigNumber(0)
    ).toString(),
    collateralAmount: toAmount(
      {
        elastic: pair.collateral.totalSupplyElastic.toBigNumber(0),
        base: pair.collateral.totalSupplyBase.toBigNumber(0),
      },
      pair.totalCollateralShare.toBigNumber(0)
    ).toString(),
  }))
}

export const getUserKashiPairs = async (chainId = ChainId.ETHEREUM, variables) => {
  const { userKashiPairs } = await fetcher(chainId, kashiUserPairsQuery, variables)

  return userKashiPairs.map((userPair) => ({
    ...userPair,
    assetAmount: Math.floor(
      userPair.assetFraction / getFraction({ ...userPair.pair, token0: userPair.pair.asset })
    ).toString(),
    borrowedAmount: toAmount(
      {
        elastic: userPair.pair.totalBorrowElastic.toBigNumber(0),
        base: userPair.pair.totalBorrowBase.toBigNumber(0),
      },
      userPair.borrowPart.toBigNumber(0)
    ).toString(),
    collateralAmount: toAmount(
      {
        elastic: userPair.pair.collateral.totalSupplyElastic.toBigNumber(0),
        base: userPair.pair.collateral.totalSupplyBase.toBigNumber(0),
      },
      userPair.collateralShare.toBigNumber(0)
    ).toString(),
  }))
}

export const getBentoUserTokens = async (chainId = ChainId.ETHEREUM, variables) => {
  const { userTokens } = await fetcher(chainId, bentoUserTokensQuery, variables)

  return userTokens
    .map((token) => ({
      ...(token.token as any),
      shares: token.share as string,
    }))
    .map((token) => ({
      ...token,
      amount: toAmount(
        {
          elastic: token.totalSupplyElastic.toBigNumber(0),
          base: token.totalSupplyBase.toBigNumber(0),
        },
        token.shares.toBigNumber(0)
      ).toString(),
    }))
}

export const getBentoBox = async (chainId = ChainId.ETHEREUM, variables) => {
  const { bentoBoxes } = await fetcher(chainId, bentoBoxQuery, variables)

  return bentoBoxes[0]
}

export const getBentoStrategies = async (chainId = ChainId.ETHEREUM, variables) => {
  const { strategies } = await fetcher(chainId, bentoStrategiesQuery, variables)

  const SECONDS_IN_YEAR = 60 * 60 * 24 * 365

  return strategies?.map((strategy) => {
    const apys = strategy.harvests?.reduce((apys, _, i) => {
      const [lastHarvest, previousHarvest] = [strategy.harvests?.[i], strategy.harvests?.[i + 1]]

      if (!previousHarvest) return apys

      const profitPerYear =
        ((SECONDS_IN_YEAR / (lastHarvest.timestamp - previousHarvest.timestamp)) * lastHarvest.profit) /
        10 ** strategy.token.decimals

      const [tvl, tvlPrevious] = [
        lastHarvest?.tokenElastic / 10 ** strategy.token.decimals,
        previousHarvest?.tokenElastic / 10 ** strategy.token.decimals,
      ]

      return [...apys, ((profitPerYear / ((tvl + tvlPrevious) / 2)) * 100) / 2]
    }, [])

    const apy = apys.reduce((apyAcc, apy) => apyAcc + apy, 0) / apys.length

    return {
      token: strategy.token.id,
      apy: !isNaN(apy) ? aprToApy(apy, 365) : 0,
      targetPercentage: Number(strategy.token.strategyTargetPercentage ?? 0),
    }
  })
}

export const getBentoTokens = async (chainId = ChainId.ETHEREUM, variables) => {
  const { tokens } = await fetcher(chainId, bentoTokensQuery, variables)

  return tokens
}
