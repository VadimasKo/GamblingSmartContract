import styles from './InstructionSteps.module.css'


const InstructionSteps = () => {
  return (
    <div className={styles.images}>
      <div className={styles.placeBet}/>
      <div className={styles.wait}/>
      <div className={styles.notSuicide}/>
      <p>Bet</p>
      <p>Wait</p>
      <p>..Win?</p>
    </div>
  )
}

export default InstructionSteps
