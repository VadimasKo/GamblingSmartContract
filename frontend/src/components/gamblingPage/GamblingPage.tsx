import {
  useCallback,
  useContext,
  useState,
}                          from "react"

import { PlayerWithColor } from "../common/types"
import { Web3Context }     from "../web3/web3Context"
import BetSelector         from "../betSelector/BetSelector"
import PieChart            from "../pieChart/PieChart"
import useModal            from "../modal/useModal"

import styles              from './GamblingPage.module.css'
import usePlayers          from "./hooks/usePlayers"
import usePoolSize         from "./hooks/usePoolSize"
import useRemainingTime    from "./hooks/useRemainingTime"


const GamblingPage = () => {
  const { account, gamblingPool } = useContext(Web3Context)
  const placeBet  = gamblingPool?.methods.placeBet
  const getWinner = gamblingPool?.methods.getWinner

  const [active, setActive]               = useState<PlayerWithColor | null>(null)
  const [modal, updateModal]              = useModal()
  const [players, getPlayers]             = usePlayers()
  const [poolSize, getPoolSize]           = usePoolSize()
  const [remainingTime, getRemainingTime] = useRemainingTime()

  const handleSubmit = async (betSize: number, name: string) => {
    await placeBet(name).send({ from: account, value: betSize })
    getRemainingTime()
    getPlayers()
    getPoolSize()
  }

  const onDeadLine = useCallback(async () => {
    const winner = await getWinner().call()
    if (winner[0] === account) {
      updateModal('win')
    } else {
      updateModal('loss')
    }
  }, [account, getWinner, updateModal])


  return (
    <div className={styles.GamblingPage}>
      <PieChart
        data={players}
        remainingTime={remainingTime}
        active={active}
        setActive={setActive}
        poolSize={poolSize}
        onZero={onDeadLine}
      />
      <BetSelector onSubmit={handleSubmit} />
      {modal}
    </div>
  )
}

export default GamblingPage
