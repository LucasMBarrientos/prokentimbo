import type { NextPage } from "next";
import React,{useState} from "react";
import TableFixture from "../../features/table";
import { TABLA_PRIMERA } from "../../data/primeraTable";
import Fixture from "../../components/fixture";
import styles from "./index.module.scss"
import Llaves from "../../components/Llaves";
import { IResultadosPrimera } from "../../types";

interface IFechasProps{
  fechas: IResultadosPrimera[]
}

const Fechas = ({fechas}: IFechasProps) => {
  const [fechaActive, setFecha] = useState<number>(1);
  //console.log(fechas[fecha-1])
  return (
      <div className={styles.fixtseccion}id="fixtseccion">
        {fechas.map((fecha,index)=> {
          return(<div className={styles.cfecha} data-active={index+1==fechaActive}onClick={()=>setFecha(index+1)}>{index+1}</div> )
        })}
        <div style={{clear:"both"}}/>
        <br/>
        <div className={styles.selfecha} id="selfecha">
          <div className={styles.fecha} id="flechaatr"><img src="https://www.promiedos.com.ar/images/menu/flecha1.png"/></div>
          <div className={styles.fechmedio} id="fechmedio">FECHA {fechaActive}<br/>Primera</div>
          <div className={styles.fecha} id="flechaad"><img src="https://www.promiedos.com.ar/images/menu/flecha2.png"/></div>
        </div>
        <div style={{clear:"both"}}/>
        <div className={styles.fixturein} id="fixturein">
          <Fixture resultados={fechas[fechaActive-1].resultados}/>
          <div className={styles.abajofix}>
            <br/>
            <strong>Estadisticas Fecha</strong>:
            <br/> 
            <strong>37</strong> goles en <strong>14</strong> partidos (2.64 de media)
            <br/>
            Goles locales: <strong>23</strong> - Goles visitantes: <strong>14</strong> 
            <br/>
            Vict. locales: <strong>7</strong>  - Vict. visitantes: <strong>3</strong> - Empates: <strong>4</strong>
            <br/>
            <br/>
            <strong>Canales Arg</strong>:
            <br/> 
            <img src="https://www.promiedos.com.ar/images/ca/102.png" width="14px"/> ESPN Premium   -    
            <img src="https://www.promiedos.com.ar/images/ca/103.png" width="14px"/> TNT Sports  -<br/> 
            <img src="https://www.promiedos.com.ar/images/ca/7.png" width="14px"/> TV Publica<br/>        
          </div>
        </div> 
      </div>
    
  );
};

export default Fechas