import { ReactChild } from 'react'

import styles         from './modal.module.css'

interface Props {
  children: ReactChild
}


const Modal = ({ children }: Props) => {
  return (
    <div className={styles.modal}>
      {children}
    </div>
  )
}


export default Modal