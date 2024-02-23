import React from "react";
import styles from "./index.module.scss";
import { EQUIPOS_PRIMERA } from "../../data/primeraTable";

const EquiposYPlanteles = () => {
  return (
    <div className={styles.root} >
      <div className={styles.titulos} id="titulos">EQUIPOS <br/> (Pulsar en el equipo para ver su info detallada)</div>
        <div className={styles.wrapper}>
          {EQUIPOS_PRIMERA.map((team,index) => (
            <div className={styles.team }>
              <img width="30px" src={team.escudo}/>
              <strong>{team.name}</strong>
            </div>
          ))}
        </div>
    </div>
  );
};

export default EquiposYPlanteles