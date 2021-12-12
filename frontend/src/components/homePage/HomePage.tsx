import { useContext }   from "react";
import Button           from "../common/button/Button";

import InstructionSteps from "./components/InstructionSteps";
import styles           from "./HomePage.module.css"

import { Web3Context }  from "../web3/web3Context";

interface Props {
  onClick: () => void
}


const HomePage = ({ onClick }: Props) => {
  const { account } = useContext(Web3Context)

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageBanner}>
        <h1>🎰 Smart Investment 🎰</h1>
        <p>a platform to quickly lose money
          {account}
        </p>
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
