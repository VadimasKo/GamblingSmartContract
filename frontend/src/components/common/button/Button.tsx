import { ReactNode } from 'react'

import styles        from './Button.module.css'

interface Props {
  text:    ReactNode
  onClick: () => void
  type:    'primary' | 'secondary'
}


const Button = ({ text, onClick, type }: Props) => {
  return (
    <button
      className={styles.primaryButton}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
