import { ChainId } from '@sushiswap/core-sdk'
import useSWR, { SWRConfiguration } from 'swr'
import { useBlock } from '.'
import { getTridentPools, TridentPool } from '../fetchers/pools'

interface useTridentPoolsProps {
  timestamp?: number
  block?: number
  chainId: ChainId
  shouldFetch?: boolean
  subset: string[]
}

export function useTridentPools(
  { timestamp, block, chainId, shouldFetch = true, subset }: useTridentPoolsProps,
  swrConfig: SWRConfiguration = undefined
): TridentPool[] {
  const blockFetched = useBlock({ timestamp, chainId, shouldFetch: shouldFetch && !!timestamp })
  block = block ?? (timestamp ? blockFetched : undefined)

  shouldFetch = shouldFetch && !!chainId

  const variables = {
    block: block ? { number: block } : undefined,
    where: {
      id_in: subset?.map((id) => id?.toLowerCase()),
    },
  }

  const { data } = useSWR(
    shouldFetch ? ['factory', chainId, JSON.stringify(variables)] : null,
    () => getTridentPools(chainId, variables),
    swrConfig
  )
  return data
}
