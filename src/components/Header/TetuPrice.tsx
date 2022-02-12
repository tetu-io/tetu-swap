import React, { useEffect, useState } from 'react'
import tetuAssetIcon from '../../assets/svg/xTETU.svg'
import styled from 'styled-components'
import { formatUnits } from 'ethers/lib/utils'
import Web3 from 'web3'

export const ContractReaderAbi = [{
    inputs: [],
    name: 'tetuTokenValues',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function'
  }];


const Wrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: normal;
  border-radius: 8px;
  border: 1px solid #686df1;
  box-shadow: inset 0px 0px 8px rgb(255 255 255 / 15%);
  background-color: transparent;
  color: #fff;
  text-decoration: none;

  &:hover {
    border: 1px solid #04a8f0 !important;
    box-shadow: inset 0px 0px 8px rgb(255 255 255 / 25%);
    cursor: pointer;
  }
`;

const TetuIcon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 10px;
`;

export const TetuPrice = () => {  
  const [price, setPrice] = useState<null | string>(null)

  useEffect(() => {
    const web3 = new Web3('https://polygon-rpc.com/')
    const contractReaderAddr = '0xCa9C8Fba773caafe19E6140eC0A7a54d996030Da'

    const Contract = new web3.eth.Contract(
      // @ts-ignore
      ContractReaderAbi,
      // @ts-ignore
      contractReaderAddr,
    )

    Contract.methods.tetuTokenValues().call().then((res: any) => {
      setPrice(formatUnits(res[0]))
    })
  }, [])

  const isLoading = price == null

  // const handleClick = () => {
  //   document.location.replace('https://swap.tetu.io/#/swap?inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&outputCurrency=0x255707B70BF90aa112006E1b07B9AeA6De021424')
  // }

  return (
    <div>
      <Wrapper href="https://www.coingecko.com/en/coins/tetu" target="_blank">
        <TetuIcon src={tetuAssetIcon} />
         {isLoading ? '...' : '$' + parseFloat(parseFloat(price!).toFixed(4))}
      </Wrapper>
    </div>
  )
}