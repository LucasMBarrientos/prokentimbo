import React from 'react';
import styles from "./index.module.scss"
import logo from "../../images/logo2.jpg"

const Banner = () => {

  return (
    <div className={styles.banner}>
      <a href="/">
        <img src={logo.src}/>
      </a>
    </div>
  );
};

export default Banner;