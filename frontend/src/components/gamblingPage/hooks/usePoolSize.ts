import {
  useCallback,
  useContext,
  useEffect,
  useState,
}                      from "react"

import { Web3Context } from "../../web3/web3Context"


const usePlayers = (): [number, () => void] => {
  const { gamblingPool } = useContext(Web3Context)
  const fetchPoolSize = gamblingPool?.methods.getPoolSize

  const [poolSize, setPoolSize] = useState(0)

  const getPoolSize = useCallback(async () => {
    const sizeBuffer = await fetchPoolSize().call()
    setPoolSize(sizeBuffer)
  }, [fetchPoolSize])

  useEffect(() => {
    if (gamblingPool) {
      getPoolSize()
    }
  }, [gamblingPool, getPoolSize])

  return [poolSize, getPoolSize]
}

export default usePlayers
