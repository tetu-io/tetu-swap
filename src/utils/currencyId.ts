import { Currency, MATIC, Token } from '../sdk'

export function currencyId(currency: Currency): string {
  if (currency === MATIC) return 'MATIC'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
