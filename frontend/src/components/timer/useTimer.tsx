import {
    useEffect,
    useState,
}                       from "react"
import { setInterval }  from "timers"

import { timeToString } from "./timeToString"


const useTimer = (time: number) => {
  const [timer, setTimer] = useState(time)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(state => state - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  },[])

  return timeToString(timer)
}

export default useTimer