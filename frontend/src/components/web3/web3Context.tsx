import {
  createContext,
  ReactChild,
  useEffect,
  useState,
}           from "react"
import Web3 from "web3"

interface Web3ContextValues {
  account?: string
}

const networkURL = 'http://localhost:7545'


export const Web3Context =  createContext<Web3ContextValues>({})


const Web3Provider = ({ children }: { children: ReactChild }) => {

  const [account, setAccount] = useState<string>()

  useEffect(() => {
    const load = async () => {
      const web3 = new Web3(Web3.givenProvider || networkURL)
      const accounts = await web3.eth.requestAccounts()

      setAccount(accounts[0])
    }

    load()
  }, [])

  return (
    <Web3Context.Provider value={ { account: account }}>
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Provider