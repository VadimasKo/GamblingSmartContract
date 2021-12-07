import { useState } from "react"

import { Player }   from "../common/types"
import BetSelector  from "../betSelector/BetSelector"
import PieChart     from "../pieChart/PieChart"

import styles       from './GamblingPage.module.css'


const players: Player[] = [
  { id: "1", amount: 200, color: "#0033ad"},
  { id: "2", amount: 145, color: "#00ffbd"},
  { id: "3", amount: 600, color: "#F7931A"},
]

const GamblingPage = () => {
  const [active, setActive] = useState<Player | null>(null)

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
