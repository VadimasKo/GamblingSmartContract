import {
    useEffect,
    useState,
}                       from "react"
import { setInterval }  from "timers"

import { timeToString } from "./timeToString"


const useTimer = (time: number, onZero: () => void) => {
  const [timer, setTimer] = useState(time)
  
  useEffect(() => {
    setTimer(time)
  },[time])

  useEffect(() => {
    if(timer === 0) {
      onZero()
    }
  }, [onZero, timer])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(state => {
        if(state <= 0) {
          clearInterval(interval)
          return state
        } else {
          return state - 1
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  },[])

  return timeToString(timer)
}

export default useTimer