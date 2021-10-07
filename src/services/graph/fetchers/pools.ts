import { getTridentPoolsQuery } from '../queries'

import { ChainId } from '@sushiswap/core-sdk'
import { GRAPH_HOST } from '../constants'
import { request } from 'graphql-request'
import { PoolType } from '../../../features/trident/types'

const gqlPoolTypeMap: Record<string, PoolType> = {
  concentratedLiquidityPools: PoolType.ConcentratedLiquidity,
  constantProductPools: PoolType.ConstantProduct,
  hybridPools: PoolType.Hybrid,
  indexPools: PoolType.Weighted,
}

interface TridentPool {
  symbols: string[]
  currencyIds: string[]
  type: PoolType
  totalValueLocked: string
}

const formatPools = (pools: TridentPoolQueryResult): TridentPool[] =>
  Object.entries(pools)
    .filter(([, assets]) => assets.length)
    .flatMap(([poolType, poolList]) =>
      poolList.map(
        ({ assets, totalValueLocked }) =>
          ({
            currencyIds: assets.map((asset) => asset.id),
            symbols: assets.map((asset) => asset.symbol),
            type: gqlPoolTypeMap[poolType],
            totalValueLocked,
          } as TridentPool)
      )
    )

interface PoolData {
  totalValueLocked: string
  assets: {
    id: string
    symbol: string
  }[]
}

interface TridentPoolQueryResult {
  concentratedLiquidityPools: PoolData[]
  constantProductPools: PoolData[]
  hybridPools: PoolData[]
  indexPools: PoolData[]
}

export const getTridentPools = async (chainId: ChainId = ChainId.MAINNET): Promise<TridentPool[]> => {
  const result = await request<TridentPoolQueryResult>(
    `${GRAPH_HOST[chainId]}/subgraphs/name/sushiswap/trident`,
    getTridentPoolsQuery
  )
  return formatPools(result)
}
