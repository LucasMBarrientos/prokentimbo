import React from 'react';
import styles from "./index.module.scss"
import { IResultadosPrimera } from '../../types';
import { EQUIPOS_PRIMERA } from '../../data/primeraTable';



const Fixture = ({resultados}:IResultadosPrimera) => {
console.log(resultados);
  return (
    <table>
      <tbody>
      <tr id="_369">
          <td className={styles.gamefin} id="ti_1_369"></td>
          <td className={styles.gameT}>
          </td>
          <td className={styles.gameR} id="resu1_1_369">
          </td>
          <td className={styles.gameR}id="resu2_1_369">
          </td>
          <td className={styles.gameT}>
          </td>
          <td className={styles.gameInfo} id="for_1_369">
          </td>
        </tr>
        <tr className={styles.diapart}>
          <td colSpan={6} >Sábado 22 de Julio</td>
        </tr> 
        
          {resultados.map((resultado)=>{
          return(<><tr id="_369">
            <td className={styles.gamefin} id="ti_1_369">Final</td>
            <td className={styles.gameT}>
              <img src={EQUIPOS_PRIMERA.find(x => x.id === resultado.equipoLocal).escudo} />
              <br />
              <span id="t1_1_369">{EQUIPOS_PRIMERA.find(x => x.id === resultado.equipoLocal).name}</span>
            </td>
            <td className={styles.gameR} id="resu1_1_369">
              <span id="r1_1_369">{resultado.golesLocal}</span>
            </td>
            <td className={styles.gameR} id="resu2_1_369">
              <span id="r2_1_369">{resultado.golesVisitantes}</span>
            </td>
            <td className={styles.gameT}>
              <img src={EQUIPOS_PRIMERA.find(x => x.id === resultado.equipoVisitante).escudo} />
              <br />
              <span id="t2_1_369">{EQUIPOS_PRIMERA.find(x => x.id === resultado.equipoVisitante).name}</span>
            </td>
            <td className={styles.gameInfo} id="for_1_369">

            </td>
          </tr><tr className={styles.goles} id="gole_1_369">
              <td id="g1_1_369" colSpan={3}>
              </td>
              <td id="g2_1_369" colSpan={3}>
                <i>14'</i> F.G. Metilli; <i>58'</i> F.G. Metilli;
              </td>
            </tr></>)
          })}
        
      </tbody>
    </table>
  );
};

export default Fixture;