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


const usePlayers = (): [PlayerWithColor[], () => void] => {
  const { gamblingPool } = useContext(Web3Context)
  const fetchPlayers     = gamblingPool?.methods.getPlayers

  const [players, setPlayers] = useState<PlayerWithColor[]>([])

  const getPlayers = useCallback(async () => {
    const players: Player[] = await fetchPlayers().call()
    console.log(players)
  }, [fetchPlayers
  ])

  useEffect(() => {
    if (gamblingPool) {
      getPlayers()
    }
  }, [gamblingPool, getPlayers])

  return [players, getPlayers]
}

export default usePlayers
