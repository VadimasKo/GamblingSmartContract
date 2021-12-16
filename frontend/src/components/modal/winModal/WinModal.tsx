import Button from "../../common/button/Button"
import Modal  from  "../Modal"
import styles from './WinModal.module.css'

interface Props {
  onClick: () => void
}


const WinModal = ({ onClick }: Props) => {
  return (
    <Modal>
      <div className={styles.winModal}>
        <h2>Yayy...you won 🙃</h2>
        <Button
          type='primary'
          text='okey'
          onClick={onClick}
        />
      </div>
    </Modal>
  )
}


export default WinModal