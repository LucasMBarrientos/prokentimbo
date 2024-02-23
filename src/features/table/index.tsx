import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ITeamFixture } from '../../types';
import styles from "./index.module.scss"
import { EQUIPOS_PRIMERA } from '../../data/primeraTable';

interface TableFixtureProps {
  teams: ITeamFixture[]
}

const TableFixture = (props: TableFixtureProps) => {

  const { teams } = props;
  
  return (
    <div className={styles.tablaseccion} id="tablaseccion">
      <div id="tablapts">
        <div className={styles.titulotabla}>Tabla Puntos Primera</div>
        <table className={styles.posiciones} id="posiciones">
          <thead>
            <tr>
              <th>#</th>
              <th>Equipo</th>
              <th>Pts</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
              <th>DIF</th>
            </tr>
          </thead>
          <tbody>
          {teams.map((team,index) => (
            <tr className={styles.puesto}>
              <td> { index + 1 }</td>
              <td><img width="18px" src={EQUIPOS_PRIMERA.find(x => x.id === team.equipoId).escudo} />{EQUIPOS_PRIMERA.find(x => x.id === team.equipoId).name}</td>
              <td>{team.puntos}</td>
              <td>{team.partidosGanados + team.partidosPerdidos + team.partidosEmpatados}</td>
              <td>{team.partidosGanados}</td>
              <td>{team.partidosEmpatados}</td>
              <td>{team.partidosPerdidos}</td>
              <td>{team.golesAFavor}</td>
              <td>{team.golesEnContra}</td>
              <td>{team.diferenciaDeGoles}</td>
            </tr>
            ))}
          </tbody>
        </table>
        <div className="abajotabla">
        </div>
      </div>
    </div>
  );
};

export default TableFixture;
