import { useRecoilValue } from 'recoil'
import { Currency, CurrencyAmount, JSBI, Percent, Price, ZERO } from '@sushiswap/core-sdk'
import { ONE_HUNDRED_PERCENT } from '../../../../constants'
import {
  currentLiquidityValueSelector,
  currentPoolShareSelector,
  noLiquiditySelector,
  poolAtom,
  poolBalanceAtom,
  totalSupplyAtom,
} from '../atoms'
import { useMemo } from 'react'

export const usePoolDetails = (parsedAmounts: CurrencyAmount<Currency>[]) => {
  const [currencyAAmount, currencyBAmount] = parsedAmounts
  const [, pool] = useRecoilValue(poolAtom)
  const totalSupply = useRecoilValue(totalSupplyAtom)
  const noLiquidity = useRecoilValue(noLiquiditySelector)
  const poolBalance = useRecoilValue(poolBalanceAtom)

  // Returns the current pool share not taking into account current input values
  const currentPoolShare = useRecoilValue(currentPoolShareSelector)

  // Returns the currency liquidity value expressed in underlying tokens not taking into account input values
  const currentLiquidityValue = useRecoilValue(currentLiquidityValueSelector)

  // Returns the SLP that will get minted given current input amounts
  const liquidityMinted = useMemo(() => {
    const [tokenAmountA, tokenAmountB] = [currencyAAmount?.wrapped, currencyBAmount?.wrapped]
    if (pool && totalSupply && tokenAmountA?.greaterThan(0) && tokenAmountB?.greaterThan(0)) {
      try {
        return pool.getLiquidityMinted(totalSupply?.wrapped, tokenAmountA, tokenAmountB)
      } catch (error) {
        console.error(error)
      }
    }

    return undefined
  }, [currencyAAmount?.wrapped, currencyBAmount?.wrapped, pool, totalSupply])

  // Returns the resulting pool share taking into account current pool share and inputs
  const poolShare = useMemo(() => {
    if (liquidityMinted && totalSupply && poolBalance) {
      return new Percent(poolBalance.add(liquidityMinted).quotient, totalSupply.add(liquidityMinted).quotient)
    }

    return undefined
  }, [liquidityMinted, poolBalance, totalSupply])

  const price = useMemo(() => {
    if (noLiquidity) {
      if (currencyAAmount?.greaterThan(0) && currencyBAmount?.greaterThan(0)) {
        const value = currencyBAmount.divide(currencyAAmount)
        return new Price(currencyAAmount.currency, currencyBAmount.currency, value.denominator, value.numerator)
      }
    } else {
      return pool && currencyAAmount?.wrapped ? pool.priceOf(currencyAAmount?.currency.wrapped) : undefined
    }
    return undefined
  }, [currencyAAmount, currencyBAmount, noLiquidity, pool])

  const priceImpact = useMemo(() => {
    const [wrappedAAmount, wrappedBAmount] = [currencyAAmount?.wrapped, currencyBAmount?.wrapped]

    if (!wrappedAAmount || !wrappedBAmount) return undefined
    if (!currencyAAmount.currency.equals(currencyBAmount.currency)) return undefined
    if (JSBI.equal(wrappedAAmount.quotient, ZERO)) return undefined
    const pct = ONE_HUNDRED_PERCENT.subtract(wrappedBAmount.divide(wrappedAAmount))
    return new Percent(pct.numerator, pct.denominator)
  }, [currencyAAmount, currencyBAmount])

  // Returns the currency liquidity value expressed in underlying tokens also taking into account current input values
  const liquidityValue = useMemo(() => {
    if (pool && currencyAAmount && currencyBAmount) {
      const [currentAAmount, currentBAmount] = currentLiquidityValue
      return [
        currentAAmount ? currencyAAmount.add(currentAAmount) : currencyAAmount,
        currentBAmount ? currencyBAmount.add(currentBAmount) : currencyBAmount,
      ]
    }

    return [undefined, undefined]
  }, [currencyAAmount, currencyBAmount, currentLiquidityValue, pool])

  return useMemo(
    () => ({
      poolShare,
      currentPoolShare,
      liquidityMinted,
      liquidityValue,
      currentLiquidityValue,
      price,
      priceImpact,
    }),
    [currentLiquidityValue, currentPoolShare, liquidityMinted, liquidityValue, poolShare, price, priceImpact]
  )
}

export const usePoolDetailsRemove = (slpAmount: CurrencyAmount<Currency>) => {
  const poolBalance = useRecoilValue(poolBalanceAtom)
  const totalSupply = useRecoilValue(totalSupplyAtom)

  // Returns the current pool share not taking into account current input values
  const currentPoolShare = useRecoilValue(currentPoolShareSelector)

  // Returns the currency liquidity value expressed in underlying tokens not taking into account input values
  const currentLiquidityValue = useRecoilValue(currentLiquidityValueSelector)

  // Returns the resulting pool share taking into account current pool share and inputs
  const poolShare = useMemo(() => {
    if (slpAmount && totalSupply && poolBalance) {
      return new Percent(poolBalance.subtract(slpAmount).quotient, totalSupply.subtract(slpAmount).quotient)
    }

    return undefined
  }, [poolBalance, slpAmount, totalSupply])

  return useMemo(
    () => ({
      currentPoolShare,
      currentLiquidityValue,
      poolShare,
    }),
    [currentLiquidityValue, currentPoolShare, poolShare]
  )
}
