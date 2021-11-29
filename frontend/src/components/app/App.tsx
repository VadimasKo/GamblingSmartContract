import { useState } from "react";
import GamblingPage from "../gamblingPage/GamblingPage";

import HomePage     from "../homePage/HomePage";

import styles       from "./App.module.css"


function App() {
  const [showHome, setShowHome] = useState(true)

  return (
    <div className={styles.app}>
      {showHome ? 
        <HomePage onClick={() => setShowHome(false)}/> :
        <GamblingPage/> 
      }
    </div>
  );
}

export default App;