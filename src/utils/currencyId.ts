import { Currency, MATIC, FTM, Token } from '../sdk'

export function currencyId(currency: Currency): string {
  if (currency === MATIC) return 'MATIC'
  if (currency === FTM) return 'FTM'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
