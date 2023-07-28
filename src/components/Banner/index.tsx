import React from 'react';
import styles from "./index.module.scss"

const Banner = () => {

  return (
    <div className={styles.banner}>
      <a href="//www.promiedos.com.ar/">
        <img src="https://promiedos.nyc3.cdn.digitaloceanspaces.com/menu/logo2.jpg"/>
      </a>
    </div>
  );
};

export default Banner;