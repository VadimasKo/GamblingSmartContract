import { useState } from "react"

import Button       from "../common/button/Button"

import styles       from "./BetSelector.module.css"

interface Props {
  onSubmit: (betSize: number, name: string ) => void
}


const BetSelector = ({ onSubmit }: Props) => {
  const [betSize, setBetSize] = useState(1)
  const [name, setName] = useState('')

  return (
    <div className={styles.betSelector}>
      <input
        className={styles.nameInput}
        placeholder='Name:'
        onChange={(e) => setName(e.target.value)}
      />
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
          onClick={() => onSubmit(betSize, name)}
          type='primary'
          text='Place a bet'
        />
    </div>
  )
}

export default BetSelector;