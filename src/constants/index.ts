import {ChainId, JSBI, Percent, Token, WMATIC} from '../sdk'
import {AbstractConnector} from '@web3-react/abstract-connector'

import {injected} from '../connectors'

export const ROUTER_ADDRESS = '0x121d1D47aC63fAF123b29E3267fa8feb1fADc65c'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export { PRELOADED_PROPOSALS } from './proposals'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const USDC = new Token(ChainId.MATIC, '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MATIC, '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', 6, 'USDT', 'Tether USD')
export const WBTC = new Token(ChainId.MATIC, '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', 8, 'WBTC', 'Wrapped BTC')
export const WETH = new Token(ChainId.MATIC, '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', 18, 'WETH', 'Wrapped ETH')
export const TETU = new Token(ChainId.MATIC, '0x255707B70BF90aa112006E1b07B9AeA6De021424', 18, 'TETU', 'TETU')
export const DINO = new Token(ChainId.MATIC, '0xAa9654BECca45B5BDFA5ac646c939C62b527D394', 18, 'DINO', 'DINO')

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 2
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

const UNI_ADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MATIC]: new Token(ChainId.MATIC, UNI_ADDRESS, 18, 'UNI', 'Uniswap')
}

export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
  [UNI_ADDRESS]: 'UNI',
  [GOVERNANCE_ADDRESS]: 'Governance',
  [TIMELOCK_ADDRESS]: 'Timelock'
}

export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MATIC]: [WMATIC[ChainId.MATIC], WETH, USDC, USDT, WBTC]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MATIC]: {}
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MATIC]: [WMATIC[ChainId.MATIC], WETH, USDC, USDT, WBTC, TETU]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MATIC]: [WETH, WMATIC[ChainId.MATIC], USDC, USDT, WBTC, TETU]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MATIC]: [
    [USDC, TETU],
    [USDC, USDT],
    [USDC, WBTC],
    [USDC, WETH],
    [USDT, WETH],
    [USDT, WBTC],
    [USDT, TETU],
    [WETH, WBTC],
    [WETH, TETU],
    [WBTC, TETU],
    [DINO, USDC]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = []

export const STATIC_PAIRS = new Map<string, string>([
  [USDC.address.toLowerCase() + USDT.address.toLowerCase(), '0x0A1970792114AAa40611B95988b24644583E7d3C'],
  [TETU.address.toLowerCase() + USDC.address.toLowerCase(), '0x80fF4e4153883d770204607eb4aF9994739C72DC'],
  [USDC.address.toLowerCase() + WETH.address.toLowerCase(), '0xad13Ad855FcAc6ffe6dbBa9362873228937Fba53'],
  [WBTC.address.toLowerCase() + WETH.address.toLowerCase(), '0x6Ee1488EA68d93b81Fc255c166E21739c71588ce'],
  [WETH.address.toLowerCase() + USDT.address.toLowerCase(), '0xeaCa9208121D1b5AA80eBA2fecb2f0017841265f'],
  [WBTC.address.toLowerCase() + USDC.address.toLowerCase(), '0xA2Ac987AF47CC54250fAE6b8b8f0742E8C531d74'],
  [WBTC.address.toLowerCase() + USDT.address.toLowerCase(), '0xF9875C63bae047FC819A3c2351CAf2A4B957851a'],
  [WBTC.address.toLowerCase() + TETU.address.toLowerCase(), '0x13edEdc25bCA247250b93C6EAB0291C44273ceB1'],
  [TETU.address.toLowerCase() + USDT.address.toLowerCase(), '0xCA522CD609F7187C67C8B97bE0a3A3259e7BB6FF'],
  [TETU.address.toLowerCase() + WETH.address.toLowerCase(), '0x8c9D7b1c0dAD06166Ef643Dbb75DEF0913Fe5760'],
  [WMATIC[137].address.toLowerCase() + WETH.address.toLowerCase(), '0xbC7b96467F4e33B943ecD999432055127f600B61'],
  [WMATIC[137].address.toLowerCase() + USDC.address.toLowerCase(), '0xF85aC8afF5aD22C745Bfca07d65FbCdE67A04C90'],
  [WMATIC[137].address.toLowerCase() + WBTC.address.toLowerCase(), '0xa6eaf9F1d3Af45c68417679D5204dd808E5B3C47'],
  [WMATIC[137].address.toLowerCase() + USDT.address.toLowerCase(), '0x5a218e3a6C571C161e9cdBEDcF699e219B737A67'],
  [WMATIC[137].address.toLowerCase() + TETU.address.toLowerCase(), '0x0196959958d923F2854E684B1694fb9B2d17AeE9'],
  [USDC.address.toLowerCase() + DINO.address.toLowerCase(), '0xEFeAe25C62574e2652B24E6215000c2C7a2473aB']
])
