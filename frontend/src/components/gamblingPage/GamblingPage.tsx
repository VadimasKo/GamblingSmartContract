import {
  useContext,
  useEffect,
  useState,
}                       from "react"

import { Player }       from "../common/types"
import { Web3Context }  from "../web3/web3Context"
import BetSelector      from "../betSelector/BetSelector"
import PieChart         from "../pieChart/PieChart"

import styles           from './GamblingPage.module.css'
import useRemainingTime from "./hooks/useRemainingTime"
import usePlayers       from "./hooks/usePlayers"


const GamblingPage = () => {
  const { account, gamblingPool } = useContext(Web3Context)
  const placeBet                  = gamblingPool?.methods.placeBet
  
  const [remainingTime, getRemainingTime] = useRemainingTime()
  const [players, getPlayers]             = usePlayers()
  const [active, setActive]               = useState<Player | null>(null)



  const handleSubmit = async (betSize: number, name: string) => {
    await placeBet(name).send({ from: account, value: betSize }).on('transactionHash',(hash: string) => {
      console.log('success', hash)
    })
    getRemainingTime()
    getPlayers()
  }

  console.log(players)
  return (
    <div className={styles.GamblingPage}>
        <PieChart
          data={players}
          remainingTime={remainingTime}
          active={active}
          setActive={setActive}
        />
        <BetSelector onSubmit={handleSubmit}/>
    </div>
  )
}

export default GamblingPage
