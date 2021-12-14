import Button           from "../common/button/Button";

import InstructionSteps from "./components/InstructionSteps";
import styles           from "./HomePage.module.css"


interface Props {
  onClick: () => void
}


const HomePage = ({ onClick }: Props) => {

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageBanner}>
        <h1>🎰 Smart Investment 🎰</h1>
        <p>a platform to quickly lose money</p>
        <InstructionSteps/>
        <Button
          type='primary'
          text='Get Started'
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default HomePage
