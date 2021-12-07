import Button from "../common/button/Button"

import Modal  from "./Modal"
import styles from "./LossModal.module.css"


const LossModal = () => {
    return (
      <Modal>
          <div className={styles.lossModal}>
              <h2>Whoops, you have lost {">"}_{"<"}</h2>
              <Button
                text='Got it'
                onClick={() => console.log('a')}
                type='secondary'
              />
          </div>
      </Modal>
    )
  }
  

  export default LossModal