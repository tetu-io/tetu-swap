import {ChainId, JSBI, Percent, Token, WMATIC} from '../sdk'
import {AbstractConnector} from '@web3-react/abstract-connector'

import {injected, walletconnect} from '../connectors'

export const ROUTER_ADDRESS = {
  [ChainId.MATIC]: '0xBCA055F25c3670fE0b1463e8d470585Fe15Ca819',
  [ChainId.FANTOM]: '0x1c7F7210a7ACc13d26824A8267cf9CA5D4020Bc1'
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export { PRELOADED_PROPOSALS } from './proposals'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// *** MATIC
export const USDC = new Token(ChainId.MATIC, '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MATIC, '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', 6, 'USDT', 'Tether USD')
export const WBTC = new Token(ChainId.MATIC, '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', 8, 'WBTC', 'Wrapped BTC')
export const WETH = new Token(ChainId.MATIC, '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', 18, 'WETH', 'Wrapped ETH')
export const TETU = new Token(ChainId.MATIC, '0x255707B70BF90aa112006E1b07B9AeA6De021424', 18, 'TETU', 'TETU')
export const DINO = new Token(ChainId.MATIC, '0xAa9654BECca45B5BDFA5ac646c939C62b527D394', 18, 'DINO', 'DINO')
export const miFARM = new Token(ChainId.MATIC, '0xab0b2ddB9C7e440fAc8E140A89c0dbCBf2d7Bbff', 18, 'miFARM', 'miFARM')
export const ICE = new Token(ChainId.MATIC, '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef', 18, 'ICE', 'ICE')
export const DAI = new Token(ChainId.MATIC, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'DAI')
export const KLIMA = new Token(ChainId.MATIC, '0x4e78011ce80ee02d2c3e649fb657e45898257815', 18, 'KLIMA', 'KLIMA')
export const SFF = new Token(ChainId.MATIC, '0xdf9b4b57865b403e08c85568442f95c26b7896b0', 18, 'SFF', 'Sunflower Farm')
export const MAI = new Token(ChainId.MATIC, '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1', 18, 'MAI', 'miMATIC')
export const QI = new Token(ChainId.MATIC, '0x580A84C73811E1839F75d86d75d88cCa0c241fF4', 18, 'QI', 'Qi Dao')
export const tetuQI = new Token(ChainId.MATIC, '0x4Cd44ced63d9a6FEF595f6AD3F7CED13fCEAc768', 18, 'tetuQi', 'Staked Qi')
export const UNT = new Token(ChainId.MATIC, '0xc46DB78Be28B5F2461097ed9e3Fcc92E9FF8676d', 18, 'UNT', 'Universe Token')
export const UMA = new Token(ChainId.MATIC, '0x3066818837c5e6eD6601bd5a91B0762877A6B731', 18, 'UMA', 'UMA Voting Token')
export const CLAM = new Token(ChainId.MATIC, '0xc250e9987a032acac293d838726c511e6e1c029d', 18, 'CLAM', 'Otter Clam')

// *** FANTOM
export const FANTOM_USDC = new Token(ChainId.FANTOM, '0x04068da6c83afcfa0e13ba15a6696662335d5b75', 6, 'USDC', 'USD//C')
export const FANTOM_FUSDT = new Token(ChainId.FANTOM, '0x049d68029688eabf473097a2fc38ef61633a3c7a', 6, 'fUSDT', 'fTether USD')
export const FANTOM_WBTC = new Token(ChainId.FANTOM, '0x321162cd933e2be498cd2267a90534a804051b11', 8, 'WBTC', 'Wrapped BTC')
export const FANTOM_WETH = new Token(ChainId.FANTOM, '0x74b23882a30290451a17c44f4f05243b6b58c76d', 18, 'WETH', 'Wrapped ETH')
export const FANTOM_TETU = new Token(ChainId.FANTOM, '0x65c9d9d080714cDa7b5d58989Dc27f897F165179', 18, 'TETU', 'TETU')
export const FANTOM_DAI = new Token(ChainId.FANTOM, '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e', 18, 'DAI', 'DAI')
export const FANTOM_CRV = new Token(ChainId.FANTOM, '0x1E4F97b9f9F913c46F1632781732927B9019C68b', 18, 'CRV', 'CRV')
export const FANTOM_FUSD = new Token(ChainId.FANTOM, '0xAd84341756Bf337f5a0164515b1f6F993D194E1f', 18, 'FUSD', 'FUSD')
export const FANTOM_LINK = new Token(ChainId.FANTOM, '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8', 18, 'LINK', 'LINK')
export const FANTOM_FRAX = new Token(ChainId.FANTOM, '0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355', 18, 'FRAX', 'FRAX')
export const FANTOM_DOLA = new Token(ChainId.FANTOM, '0x3129662808bEC728a27Ab6a6b9AFd3cBacA8A43c', 18, 'DOLA', 'DOLA')
export const FANTOM_MIM = new Token(ChainId.FANTOM, '0x82f0B8B456c1A451378467398982d4834b6829c1', 18, 'MIM', 'MIM')
export const FANTOM_TUSD = new Token(ChainId.FANTOM, '0x9879aBDea01a879644185341F7aF7d8343556B7a', 18, 'TUSD', 'TUSD')

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 2
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

const UNI_ADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MATIC]: new Token(ChainId.MATIC, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.FANTOM]: new Token(ChainId.MATIC, UNI_ADDRESS, 18, 'UNI', 'Uniswap')
}

export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MATIC]: [WMATIC[ChainId.MATIC], WETH, USDC, USDT, WBTC, TETU],
  [ChainId.FANTOM]: [WMATIC[ChainId.FANTOM], FANTOM_WETH, FANTOM_USDC, FANTOM_FUSDT, FANTOM_WBTC]
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
  [ChainId.MATIC]: [WMATIC[ChainId.MATIC], WETH, USDC, USDT, WBTC, TETU],
  [ChainId.FANTOM]: [WMATIC[ChainId.FANTOM], FANTOM_WETH, FANTOM_USDC, FANTOM_FUSDT, FANTOM_WBTC]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MATIC]: [WETH, WMATIC[ChainId.MATIC], USDC, USDT, WBTC, TETU],
  [ChainId.FANTOM]: [WMATIC[ChainId.FANTOM], FANTOM_WETH, FANTOM_USDC, FANTOM_FUSDT, FANTOM_WBTC]
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
    [DINO, USDC],
    [DAI, USDC],
    [KLIMA, USDC],
    [SFF, USDC],
    [MAI, TETU],
    [QI, tetuQI],
    [UNT, TETU],
    [USDC, UMA],
    [MAI, CLAM],
    [USDC, MAI],
    [USDC, QI]
  ],
  [ChainId.FANTOM]: [
    [FANTOM_USDC, FANTOM_FUSDT],
    [FANTOM_USDC, FANTOM_WBTC],
    [FANTOM_USDC, FANTOM_WETH],
    [FANTOM_USDC, FANTOM_TETU],
    [FANTOM_USDC, FANTOM_DAI],
    [FANTOM_USDC, FANTOM_CRV],
    [FANTOM_USDC, FANTOM_FUSD],
    [FANTOM_USDC, FANTOM_LINK],
    [FANTOM_USDC, FANTOM_FRAX],
    [FANTOM_USDC, FANTOM_DOLA],
    [FANTOM_USDC, FANTOM_MIM],
    [FANTOM_USDC, FANTOM_TUSD]
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
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true,
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
  [USDC.address.toLowerCase() + DINO.address.toLowerCase(), '0xEFeAe25C62574e2652B24E6215000c2C7a2473aB'],
  [USDC.address.toLowerCase() + miFARM.address.toLowerCase(), '0x6af88bD9f7288CF55B430C9AECC03849F2E7b791'],
  [USDC.address.toLowerCase() + ICE.address.toLowerCase(), '0x84D25fB747559c78314C26917A925C894116EA3C'],
  [USDC.address.toLowerCase() + DAI.address.toLowerCase(), '0x37799b48443751eBc0FD2cb4E3Ac119AD97d084b'],
  [USDC.address.toLowerCase() + KLIMA.address.toLowerCase(), '0xD4Ed96a3EeCe1C7B7A8Fa8A762281e3ED5402f76'],
  [USDC.address.toLowerCase() + SFF.address.toLowerCase(), '0xef8cba4d2CAd1d5fa988EE4652aEC83a6a0Fe68b'],
  [TETU.address.toLowerCase() + MAI.address.toLowerCase(), '0x17eA124785c7c63ea7DB96DC916e1a54FcC33Cc9'],
  [tetuQI.address.toLowerCase() + QI.address.toLowerCase(), '0xBCDd0E38F759F8C07D8416dF15D0B3e0F9146d08'],
  [TETU.address.toLowerCase() + UNT.address.toLowerCase(), '0xe8F56B590ea274d5D451F786c3270af764F1b793'],
  [USDC.address.toLowerCase() + UMA.address.toLowerCase(), '0xabca7538233cbe69709c004c52dc37e61c03796b'],
  [MAI.address.toLowerCase() + CLAM.address.toLowerCase(), '0xf8cc463a49c71bcd603db760584b6c9766dd65fd'],
  [USDC.address.toLowerCase() + MAI.address.toLowerCase(), '0x7434b6039327bd43633d8d8d240e069b9de72588'],
  [USDC.address.toLowerCase() + QI.address.toLowerCase(), '0xF1B432fea14DB8dc435B7F46EFF175dF575F0901'],

  [FANTOM_USDC.address.toLowerCase() + FANTOM_TETU.address.toLowerCase(), '0x371620F53C89d4c97e677506f0cfCf98EFcB1CF8'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_DAI.address.toLowerCase(), '0xFe7c6D25E235132ACBE74A20F012F068C5C0C5a3'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_WETH.address.toLowerCase(), '0xBDC1931A2cD902AA50941C01b13f8357B9Cf4FEb'],
  [FANTOM_USDC.address.toLowerCase() + WMATIC[250].address.toLowerCase(), '0xbCb81b9f53Db2F76C46fff377f5a080d266a329F'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_WBTC.address.toLowerCase(), '0x4a10DB969596576b4905228A5ea315728A801021'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_FUSDT.address.toLowerCase(), '0xF0954496287F9B576146CC88374A2629CAC0a6fa'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_CRV.address.toLowerCase(), '0x6dB8BaC1ac430736F2a67b5475Ba3fC5B5098073'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_FUSD.address.toLowerCase(), '0x9e51985257c4f8C31A8772dfD12c2D721F8c4760'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_LINK.address.toLowerCase(), '0xED57796D11566e4b5a0FfB4f7B38f442A0863Ac8'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_FRAX.address.toLowerCase(), '0x9F963b39a9De1bd679F4350e17429277833B1aFD'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_DOLA.address.toLowerCase(), '0xab977C496338008761DA15476BaC282c4A174601'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_MIM.address.toLowerCase(), '0xD0abD42D4718960D353f3f5A6Ca727203857fdd9'],
  [FANTOM_USDC.address.toLowerCase() + FANTOM_TUSD.address.toLowerCase(), '0x833C0A5312087Fee9127989E68664DE2b2B5640f']
])
