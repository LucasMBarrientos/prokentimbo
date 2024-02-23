import type { NextPage } from "next";
import React from "react";
import TableFixture from "../../features/table";
import { TABLA_PRIMERA } from "../../data/primeraTable";
import Fixture from "../../components/fixture";
import styles from "./index.module.scss"
import Llaves from "../../components/Llaves";

const Primera: NextPage = () => {

  return (
    <div className={styles.principal} id="principal">
      <div className={styles.titulos} id="titulos"><img src="https://www.promiedos.com.ar/images/paises/ar.png"/>COPA CONTINENTAL<img src="https://www.promiedos.com.ar/images/paises/ar.png"/></div>
      <div className={styles.botoneraliga} id="botoneraliga">
        <a href="primera">
          <div className={styles.buttonAction}>Fixture y<br/>Tablas</div>
        </a>
        <a href="primera=equipos">
          <div className={styles.buttonAction}>Equipos y<br/>Planteles</div>
        </a>
        <a href="primera=estadisticas">
          <div className={styles.buttonAction}>Mas Datos<br/>Torneo</div>
        </a>
        <a href="primera=historialtorneos">
          <div className={styles.buttonAction}>Campeones<br/>Liga</div>
        </a>
        <a href="copasnacionales">
          <div className={styles.buttonAction}>Campeones<br/>Copas</div>
        </a>
      </div>
      <br style={{clear:"both"}}/>

      <Llaves />
      <TableFixture teams={TABLA_PRIMERA}/>

      <div className={styles.fixtseccion}id="fixtseccion">
        <div className={styles.cfecha}>1</div> 
        <div className={styles.cfecha}>2</div> 
        <div className={styles.cfecha}>3</div> 
        <div className={styles.cfecha}>4</div> 
        <div className={styles.cfecha}>5</div> 
        <div className={styles.cfecha}>6</div> 
        <div className={styles.cfecha}>7</div> 
        <div className={styles.cfecha}>8</div> 
        <div className={styles.cfecha}>9</div> 
        <div className={styles.cfecha}>10</div> 
        <div className={styles.cfecha}>11</div> 
        <div className={styles.cfecha}>12</div> 
        <div className={styles.cfecha}>13</div> 
        <div className={styles.cfecha}>14</div> 
        <div className={styles.cfecha}>15</div> 
        <div className={styles.cfecha}>16</div> 
        <div className={styles.cfecha}>17</div> 
        <div className={styles.cfecha}>18</div> 
        <div className={styles.cfecha}>19</div> 
        <div className={styles.cfecha}>20</div> 
        <div className={styles.cfecha}>21</div> 
        <div className={styles.cfecha}>22</div> 
        <div className={styles.cfecha}>23</div> 
        <div className={styles.cfecha}>24</div> 
        <div className={styles.cfecha}>25</div> 
        <div className={styles.cfecha}>26</div> 
        <div className={styles.cfecha}>27</div>
        <div style={{clear:"both"}}/>
        <br/>
        <div className={styles.selfecha} id="selfecha">
          <div className={styles.fecha} id="flechaatr"><img src="https://www.promiedos.com.ar/images/menu/flecha1.png"/></div>
          <div className={styles.fechmedio} id="fechmedio">FECHA 26<br/>Primera</div>
          <div className={styles.fecha} id="flechaad"><img src="https://www.promiedos.com.ar/images/menu/flecha2.png"/></div>
        </div>
        <div style={{clear:"both"}}/>
        <div className={styles.fixturein} id="fixturein">
          <Fixture/>
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
      <div style={{display:"inline-block"}}>
        <div className={styles.golseccion} id="golseccion">
          <div >Goleadores</div>
          <table id="goleadorest">
            <tbody>
              <tr >
                <th>Jugador</th>
                <th>Goles</th>
                <th>(Penal)</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.golseccion} id="golseccion" >
          <div >Asistencias</div>
          <table id="goleadorest">
            <tbody>
              <tr >
                <th>Jugador</th>
                <th>Asist.</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Primera