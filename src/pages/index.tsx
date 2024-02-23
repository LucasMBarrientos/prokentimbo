import React from "react";
import type { NextPage } from "next";
import Fixture from "../components/fixture";

import styles from "./index.module.scss"

const Home: NextPage = () => {
  
  return (
    <div className={styles.fixturein} id="fixturein">
      <h1>INICIO</h1>
    </div>
    
  );
};

export default Home;
