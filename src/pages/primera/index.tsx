import type { NextPage } from "next";
import React from "react";
import TableFixture from "../../features/table";
import { TABLA_PRIMERA } from "../../data/primeraTable";
import Fixture from "../../components/fixture";
import styles from "./index.module.scss"
import Fechas from "../../components/Fechas";
import {Resultados_Primera} from "./data";
import { useRouter } from "next/router";
import FixtureYTablas from "../../components/FixtureYTablas";
import EquiposYPlanteles from "../../components/EquiposYPlanteles";

const Contenido = (tabSelected:string | undefined) => { 
  switch(tabSelected){
    case "equipos":
      return <EquiposYPlanteles/>
    default:
      return <FixtureYTablas/>
  }
}



const Primera: NextPage = () => {
  const { query, push } = useRouter();
  const tabSelected = query.tab as string;
  console.log(tabSelected)
  return (
    <div className={styles.principal} id="principal">
      <div className={styles.titulos} id="titulos"><img src="https://www.promiedos.com.ar/images/paises/ar.png"/>LIGA PROFESIONAL<img src="https://www.promiedos.com.ar/images/paises/ar.png"/></div>
      <div className={styles.botoneraliga} id="botoneraliga">
        <a onClick={()=> push({pathname:"/primera"})}>
          <div className={styles.buttonAction} data-active={!Boolean(tabSelected)}>Fixture y<br/>Tablas</div>
        </a>
        <a onClick={()=> push({pathname:"/primera",query:{tab:"equipos"}})} >
          <div className={styles.buttonAction} data-active={tabSelected=="equipos"} >Equipos y<br/>Planteles</div>
        </a>
        <a onClick={()=> push({pathname:"/primera",query:{tab:"historialTorneos"}})}>
          <div className={styles.buttonAction} data-active={tabSelected=="historialTorneos"}>Campeones<br/>Liga</div>
        </a>
        <a onClick={()=> push({pathname:"/primera",query:{tab:"historialCopasNacionales"}})}>
          <div className={styles.buttonAction} data-active={tabSelected=="historialCopasNacionales"}>Campeones<br/>Copas</div>
        </a>
      </div>
      <br style={{clear:"both"}}/>
      {Contenido(tabSelected)}
    </div>
  );
};

export default Primera