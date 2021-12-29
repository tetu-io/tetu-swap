import { CurrencyAmount, JSBI, Currency } from '../sdk'
import { MIN_ETH } from '../constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (Currency.isNetworkCoin(currencyAmount.currency.name)) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_ETH)) {
      return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_ETH), currencyAmount.chainId)
    } else {
      return CurrencyAmount.ether(JSBI.BigInt(0), currencyAmount.chainId)
    }
  }
  return currencyAmount
}
