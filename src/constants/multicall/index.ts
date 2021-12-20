import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MATIC]: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  [ChainId.FANTOM]: '0x75e1e98650c119c4E3dCE3070CE6A5397Ed70c6a'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
