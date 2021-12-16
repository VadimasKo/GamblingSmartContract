import {
  useCallback,
  useContext,
  useEffect,
  useState,
}                      from "react"

import { Web3Context } from "../../web3/web3Context"
import getCurrentTime  from "../../common/time/getCurrentTime"


const useRemainingTime = (): [number, () => void] => {
  const { gamblingPool } = useContext(Web3Context)
  const getDeadline      = gamblingPool?.methods.getDeadline
  
  const [remainingTime, setRemainingTime] = useState(-1)
  
  const getRemainingTime = useCallback(async () => {
    const deadline = parseInt(await getDeadline().call())
    const buffer = deadline - Math.ceil(getCurrentTime() / 1000)
    setRemainingTime(buffer)
  }, [getDeadline])

  useEffect(() => {
    if(gamblingPool) 
      getRemainingTime()
  }, [gamblingPool, getDeadline, getRemainingTime])
  

  return [remainingTime, getRemainingTime]
}

export default useRemainingTime
