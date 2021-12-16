import {
  useCallback,
  useContext,
  useEffect,
  useState,
}                      from "react"

import {
  Player,
  PlayerWithColor,
}                      from "../../common/types"
import { Web3Context } from "../../web3/web3Context"

const colors = ['#F7931A', '#00ffbd','#0033ad']


const usePlayers = (): [PlayerWithColor[], () => void] => {
  const { gamblingPool } = useContext(Web3Context)
  const fetchPlayers     = gamblingPool?.methods.getPlayers

  const [players, setPlayers] = useState<PlayerWithColor[]>([])

  const getPlayers = useCallback(async () => {
    const players: Player[] = await fetchPlayers().call()

    setPlayers(players.map((player, index) => {
      return {...player, color: colors[index % colors.length]}
    }))
  }, [fetchPlayers])

  useEffect(() => {
    if (gamblingPool) {
      getPlayers()
    }
  }, [gamblingPool, getPlayers])

  return [players, getPlayers]
}

export default usePlayers
