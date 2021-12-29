import JSBI from 'jsbi'

import {ChainId, SolidityType} from '../constants'
import {validateSolidityTypeInstance} from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly MATIC: Currency = new Currency(18, 'MATIC', 'MATIC')
  public static readonly FTM: Currency = new Currency(18, 'FTM', 'FTM')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  public static getNetworkCoinByName(name: string | undefined) {
    if (name?.toUpperCase() === 'MATIC') {
      return Currency.MATIC
    } else if (name?.toUpperCase() === 'FTM') {
      return Currency.FTM
    }
    return Currency.MATIC
  }

  public static getNetworkCoinByEnum(chainId: ChainId | undefined) {
    return chainId === ChainId.MATIC ? Currency.MATIC : chainId === ChainId.FANTOM ? Currency.FTM : Currency.MATIC
  }

  public static isNetworkCoin(currencyId: string | undefined): boolean {
    return currencyId?.toUpperCase() === 'MATIC' || currencyId?.toUpperCase() === 'FTM'
  }
}

const MATIC = Currency.MATIC
const FTM = Currency.FTM
export { MATIC, FTM }
