import React from "react";
import TableFixture from "../../features/table";
import { TABLA_PRIMERA } from "../../data/primeraTable";
import styles from "./index.module.scss"
import Fechas from "../../components/Fechas";
import { useRouter } from "next/router";
import { Resultados_Primera } from "../../pages/primera/data";

const FixtureYTablas = () => {
  const { query, push } = useRouter();
  const tabSelected = query.tab;
  console.log(tabSelected)
  return (
    
      <>
      <TableFixture teams={TABLA_PRIMERA} />
      <Fechas fechas={Resultados_Primera} />
      <div style={{ display: "inline-block" }}>
      <div className={styles.golseccion} id="golseccion">
        <div>Goleadores</div>
        <table id="goleadorest">
          <tbody>
            <tr>
              <th>Jugador</th>
              <th>Goles</th>
              <th>(Penal)</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.golseccion} id="golseccion">
        <div>Asistencias</div>
        <table id="goleadorest">
          <tbody>
            <tr>
              <th>Jugador</th>
              <th>Asist.</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default FixtureYTablas