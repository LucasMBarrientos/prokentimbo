import React from 'react';
import styles from "./index.module.scss"
import kentimbo from "../../images/paises/BOT.png"

const Sidebar = () => {

  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <h4><a href="/">Inicio</a></h4>
        </li>
        <li>
          <h3>Destacado</h3>
          <ul className={styles.itemsMenu} >
            <li><a href="primera">Liga Profesional</a></li>
          </ul>
        </li>
        <li>
          <h3><img width={16} height={11} src={kentimbo.src}/> Kentimbo</h3>
          <ul className={styles.itemsMenu}>
            <li><a href="primera">Liga Profesional</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;