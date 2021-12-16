import {
  useContext,
  useState,
}                       from "react"

import { Player }       from "../common/types"
import { Web3Context }  from "../web3/web3Context"
import BetSelector      from "../betSelector/BetSelector"
import PieChart         from "../pieChart/PieChart"

import styles           from './GamblingPage.module.css'
import useRemainingTime from "./hooks/useRemainingTime"
import usePlayers       from "./hooks/usePlayers"


// const players: Player[] = [
//   // { id: "1", amount: 200, color: "#0033ad"},
//   // { id: "2", amount: 145, color: "#00ffbd"},
//   // { id: "3", amount: 600, color: "#F7931A"},
//   // { id: "4", amount: 600, color: "#F7931A"},
// ]

const GamblingPage = () => {
  const { account, gamblingPool } = useContext(Web3Context)
  const placeBet                  = gamblingPool?.methods.placeBet
  
  const [remainingTime, getRemainingTime] = useRemainingTime()
  const [players, getPlayers]             = usePlayers()
  const [active, setActive]               = useState<Player | null>(null)


  const handleSubmit = (betSize: number) => {
    placeBet('vardas').send({ from: account, value: betSize }).on('transactionHash',(hash: string) => {
      console.log('success', hash)
    })
    getRemainingTime()
  }


  return (
    <div className={styles.GamblingPage}>
        <PieChart
          // data={players}
          remainingTime={remainingTime}
          data={[]}
          active={active}
          setActive={setActive}
        />
        <BetSelector onSubmit={handleSubmit}/>
    </div>
  )
}

export default GamblingPage
