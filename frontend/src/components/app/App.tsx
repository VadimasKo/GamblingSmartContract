import { useState } from "react";
import GamblingPage from "../gamblingPage/GamblingPage";

import HomePage     from "../homePage/HomePage";
import Web3Provider from "../web3/web3Context";

import styles       from "./App.module.css"


const App = () => {
  const [showHome, setShowHome] = useState(true)

  return (
    <Web3Provider>
      <div className={styles.app}>
        {showHome ? 
          <HomePage onClick={() => setShowHome(false)}/> :
          <GamblingPage/> 
        }
      </div>
    </Web3Provider>
  );
}

export default App
