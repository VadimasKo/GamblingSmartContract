import Button from "../../common/button/Button"

import Modal  from "../Modal"

import styles from "./LossModal.module.css"

interface Props {
  onClick: () => void
}


const LossModal = ({ onClick }: Props) => {
  return (
  <Modal>
    <div className={styles.lossModal}>
      <h2>Whoops, you have lost</h2>
      <h2>(•̀ᴗ•́)و</h2>
      <Button
        text='Got it'
        onClick={onClick}
        type='primary'
      />
    </div>
  </Modal>
  )
}
  
  export default LossModal
