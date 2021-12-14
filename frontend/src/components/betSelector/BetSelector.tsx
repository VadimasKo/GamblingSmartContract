import { useState } from "react"

import Button       from "../common/button/Button"

import styles       from "./BetSelector.module.css"

interface Props {
  onSubmit: (x: number) => void
}


const BetSelector = ({ onSubmit }: Props) => {
  const [betSize, setBetSize] = useState(1)

  return (
    <div className={styles.betSelector}>
      <div>
        <Button
          onClick={() => betSize > 1 && setBetSize(state => state - 1)}
          type='rounded'
          text='-'
        />
        <input
          className={styles.input}
          value={betSize}
          onChange={() => console.log('')}
        />
         <Button
          onClick={() => setBetSize(state => state + 1)}
          type='rounded'
          text='+'
        />
       
      </div>
        <Button
          onClick={() => onSubmit(betSize)}
          type='primary'
          text='Place a bet'
        />
    </div>
  )
}

export default BetSelector;