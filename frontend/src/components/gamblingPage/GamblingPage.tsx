import { useContext, useEffect, useState } from "react"

import { Player }   from "../common/types"
import BetSelector  from "../betSelector/BetSelector"
import PieChart     from "../pieChart/PieChart"

import styles       from './GamblingPage.module.css'
import { Web3Context } from "../web3/web3Context"


const players: Player[] = [
  { id: "1", amount: 200, color: "#0033ad"},
  { id: "2", amount: 145, color: "#00ffbd"},
  { id: "3", amount: 600, color: "#F7931A"},
  { id: "4", amount: 600, color: "#F7931A"},
]

const GamblingPage = () => {
  const { account, gamblingPool } = useContext(Web3Context)
  const [active, setActive] = useState<Player | null>(null)


  useEffect(() => {
    const callFunc = async () => {
      try {
        // await gamblingPool?.methods.placeBet({_name: 'a'}).call()
        const players = await gamblingPool?.methods.getPlayers().call().on('transactionHash', (hash: string) => {
          alert('worked')
        })

        return players
      } catch(err) {
        console.error(err)
      }
    }
    console.log(callFunc())
  }, [account, gamblingPool?.methods])

  return (
    <div className={styles.GamblingPage}>
        <PieChart
          data={players}
          active={active}
          setActive={setActive}
        />
        <BetSelector onSubmit={(x) => console.log(x)}/>
    </div>
  )
}

export default GamblingPage
