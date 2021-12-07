import { ReactNode } from 'react'

import styles        from './Button.module.css'

interface Props {
  text:    ReactNode
  onClick: () => void
  type:    'primary' | 'secondary' | 'rounded'
}


const Button = ({ text, onClick, type }: Props) => {
  let style: string
  switch (type) {
    case 'primary':
      style = styles.primaryButton
      break
    case 'secondary':
      style = styles.secondaryButton
      break
    case 'rounded':
      style = styles.roundedButton
      break
    default:
      style = styles.primaryButton
      break
  }


  return (
    <button
      className={style}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
