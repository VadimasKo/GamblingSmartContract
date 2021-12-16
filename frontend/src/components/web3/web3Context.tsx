import {
  createContext,
  ReactChild,
  useEffect,
  useState,
}                           from "react"
import { Contract }         from "web3-eth-contract";
import Web3                 from "web3"

import GamblingPoolContract from '../../contractBuilds/GamblingPool.json'

interface Web3ContextValues {
  account?: string
  gamblingPool?: Contract
}

const networkURL = 'http://localhost:7545'
const networkID = '5777'


export const Web3Context =  createContext<Web3ContextValues>({})


const Web3Provider = ({ children }: { children: ReactChild }) => {

  const [account, setAccount] = useState<string>()
  const [gamblingPool, setGamblingPool] = useState<Contract>()

  useEffect(() => {
    const load = async () => {
      const web3 = new Web3(Web3.givenProvider || networkURL)
      const accounts = await web3.eth.requestAccounts()


      //get contract instance
      const deployedNetwork = GamblingPoolContract.networks[networkID];
      const instance = new web3.eth.Contract(GamblingPoolContract.abi as any, deployedNetwork && deployedNetwork.address)

      setGamblingPool(instance)
      setAccount(accounts[0])
    }

    load()
  }, [])

  return (
    <Web3Context.Provider value={{ account, gamblingPool }}>
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Provider
