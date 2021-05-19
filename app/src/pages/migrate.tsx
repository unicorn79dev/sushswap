import { Pair, PancakeV1Pair, PancakeV2Pair } from '@sushiswap/sdk'
import React, { useMemo } from 'react'
import { toPancakeV1LiquidityToken, toPancakeV2LiquidityToken, useTrackedTokenPairs } from '../state/user/hooks'
import { useTokenBalance, useTokenBalancesWithLoadingIndicator } from '../state/wallet/hooks'

import Dots from '../components/Dots'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from '../hooks/useActiveWeb3React'
import { useLingui } from '@lingui/react'
import { usePairs } from '../hooks/usePairs'

// TODO: A simple proof, this will be expanded to allow for the easy plugin of other compatible exchanges.
// WIP, please do not remove

function Position({ pair }: { pair: Pair }) {
    const { account, chainId } = useActiveWeb3React()
    const userDefaultPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)

    console.log('Position...')

    return userDefaultPoolBalance ? (
        <div>
            Pair: {pair.liquidityToken.address}
            <br />
            Balance: {userDefaultPoolBalance.toSignificant(4)}
        </div>
    ) : null
}

export default function Migrate() {
    const { account, chainId } = useActiveWeb3React()

    const { i18n } = useLingui()

    // fetch the user's balances of all tracked LP tokens
    const trackedTokenPairs = useTrackedTokenPairs()

    const tokenPairsWithLiquidityTokensV1 = useMemo(
        () => trackedTokenPairs.map(tokens => ({ liquidityToken: toPancakeV1LiquidityToken(tokens), tokens })),
        [trackedTokenPairs]
    )

    const liquidityTokensV1 = useMemo(() => tokenPairsWithLiquidityTokensV1.map(tpwlt => tpwlt.liquidityToken), [
        tokenPairsWithLiquidityTokensV1
    ])

    const [pairBalancesV1, fetchingPairBalancesV1] = useTokenBalancesWithLoadingIndicator(
        account ?? undefined,
        liquidityTokensV1
    )

    // fetch the reserves for all pancake v1 pools in which the user has a balance
    const liquidityTokensWithBalancesV1 = useMemo(
        () =>
            tokenPairsWithLiquidityTokensV1.filter(({ liquidityToken }) =>
                pairBalancesV1[liquidityToken.address]?.greaterThan('0')
            ),
        [tokenPairsWithLiquidityTokensV1, pairBalancesV1]
    )

    const pairsV1 = usePairs(liquidityTokensWithBalancesV1.map(({ tokens }) => tokens))

    const isLoadingV1 =
        fetchingPairBalancesV1 ||
        pairsV1?.length < liquidityTokensWithBalancesV1.length ||
        pairsV1?.some(pairV1 => !pairV1)

    const allV1PairsWithLiquidity = pairsV1
        .map(([, pair]) => pair)
        .filter((pairV1): pairV1 is PancakeV1Pair => Boolean(pairV1))

    // V2...

    const tokenPairsWithLiquidityTokensV2 = useMemo(
        () => trackedTokenPairs.map(tokens => ({ liquidityToken: toPancakeV2LiquidityToken(tokens), tokens })),
        [trackedTokenPairs]
    )

    const liquidityTokensV2 = useMemo(() => tokenPairsWithLiquidityTokensV2.map(tpwlt => tpwlt.liquidityToken), [
        tokenPairsWithLiquidityTokensV2
    ])

    const [pairBalancesV2, fetchingPairBalancesV2] = useTokenBalancesWithLoadingIndicator(
        account ?? undefined,
        liquidityTokensV2
    )

    // fetch the reserves for all pancake v2 pools in which the user has a balance
    const liquidityTokensWithBalancesV2 = useMemo(
        () =>
            tokenPairsWithLiquidityTokensV2.filter(({ liquidityToken }) =>
                pairBalancesV2[liquidityToken.address]?.greaterThan('0')
            ),
        [tokenPairsWithLiquidityTokensV2, pairBalancesV2]
    )

    const pairsV2 = usePairs(liquidityTokensWithBalancesV2.map(({ tokens }) => tokens))

    const isLoadingV2 =
        fetchingPairBalancesV2 ||
        pairsV2?.length < liquidityTokensWithBalancesV2.length ||
        pairsV2?.some(pairV2 => !pairV2)

    const allV2PairsWithLiquidity = pairsV2
        .map(([, pair]) => pair)
        .filter((pairV2): pairV2 is PancakeV2Pair => Boolean(pairV2))

    const loading = isLoadingV1 || isLoadingV2

    const noLiquidityFound = !allV1PairsWithLiquidity.length && !allV2PairsWithLiquidity.length

    return (
        <Layout>
            <Head>
                <title>Migrate | Sushi</title>
                <meta name="description" content="Migrate your liquidity to SushiSwap." />
            </Head>

            <div>
                {loading && <Dots>Searching for liquidity</Dots>}
                {!loading && noLiquidityFound && <div>No liquidity found</div>}
                {/* <div>
                    <div className="text-2xl">Pancake V1 pairs</div>
                    {allV1PairsWithLiquidity.map((pair, i) => (
                        <Position key={i} pair={pair} />
                    ))}
                    {isLoadingV1 && <Dots />}
                </div>

                <div>
                    <div className="text-2xl">Pancake V2 pairs</div>
                    {allV2PairsWithLiquidity.map((pair, i) => (
                        <Position key={i} pair={pair} />
                    ))}
                    {isLoadingV2 && <Dots />}
                </div> */}
            </div>
        </Layout>
    )
}
