import React from 'react';
import styles from "./index.module.scss"
import kentimbo from "../../images/paises/BOT.png"

const Llaves = () => {

  return (
    <div id="bracket">
      <br/>
      <div className={styles.titulotabla}>LLAVES</div>
      <br/>
      <div className={styles.round}>
        <div className={styles.matchContainer}>
          <div className={styles.teamLogo}>
            Atl. Nacional <br/>
            <span /*class="31a"*/>
              <img src="https://www.promiedos.com.ar/images/64/662.png"/>
            </span>
          </div>
          <div className={styles.teamLogo}>
            Racing Club<br/>
            <span /*class="31b"*/>
              <img src="https://www.promiedos.com.ar/images/64/17.png"/>
            </span>
          </div>
          <div className={styles.conectorArriba}>
            <div/>
          </div>
          <div className={styles.resultados}>
            <div className={styles.ida}>
              <img src="https://www.promiedos.com.ar/images/18/662.png"/>4-2<img src="https://www.promiedos.com.ar/images/18/17.png"/>
            </div>
            <div className={styles.vuelta}>
              <img src="https://www.promiedos.com.ar/images/18/17.png"/>3-0<img src="https://www.promiedos.com.ar/images/18/662.png"/>
            </div>
          </div>
        </div>
        <div className={styles.matchContainer}>
          <div className={styles.teamLogo}>
            Atl. Nacional <br/>
            <span /*class="31a"*/>
              <img src="https://www.promiedos.com.ar/images/64/662.png"/>
            </span>
          </div>
          <div className={styles.teamLogo}>
            Racing Club<br/>
            <span /*class="31b"*/>
              <img src="https://www.promiedos.com.ar/images/64/17.png"/>
            </span>
          </div>
          <div className={styles.conectorArriba}>
            <div/>
          </div>
          <div className={styles.resultados}>
            <div className={styles.ida}>
              <img src="https://www.promiedos.com.ar/images/18/662.png"/>4-2<img src="https://www.promiedos.com.ar/images/18/17.png"/>
            </div>
            <div className={styles.vuelta}>
              <img src="https://www.promiedos.com.ar/images/18/17.png"/>3-0<img src="https://www.promiedos.com.ar/images/18/662.png"/>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.round}>
        <div className={styles.matchContainer}>
          <div className={styles.teamLogo}>
            Atl. Nacional <br/>
            <span /*class="31a"*/>
              <img src="https://www.promiedos.com.ar/images/64/662.png"/>
            </span>
          </div>
          <div className={styles.teamLogo}>
            Racing Club<br/>
            <span /*class="31b"*/>
              <img src="https://www.promiedos.com.ar/images/64/17.png"/>
            </span>
          </div>
          <div className={styles.conectorArriba}>
            <div/>
          </div>
          <div className={styles.resultados}>
            <div className={styles.ida}>
              <img src="https://www.promiedos.com.ar/images/18/662.png"/>4-2<img src="https://www.promiedos.com.ar/images/18/17.png"/>
            </div>
            <div className={styles.vuelta}>
              <img src="https://www.promiedos.com.ar/images/18/17.png"/>3-0<img src="https://www.promiedos.com.ar/images/18/662.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Llaves;