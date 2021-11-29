import { useState } from "react";

import HomePage     from "../homePage/HomePage";

import styles       from "./App.module.css"


function App() {
  const [showHome, setShowHome] = useState(true)

  return (
    <div className={styles.app}>
      {showHome ? 
        <HomePage onClick={() => setShowHome(false)}/> :
        <div>placeholder</div>
      }
    </div>
  );
}

export default App;
