import InstructionSteps from "./components/InstructionSteps";
import styles           from "./HomePage.module.css"

interface Props {
  onClick: () => void
}


const HomePage = ({ onClick }: Props) => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePageBanner}>
        <h1>🎰"Smart Investment"🎰</h1>
        <p>
            a platform to quickly loose money
        </p>
        <InstructionSteps/> 
        <button className={styles.bannerButton} onClick={onClick}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default HomePage;
