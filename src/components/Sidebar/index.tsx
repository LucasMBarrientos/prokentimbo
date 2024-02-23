import React from 'react';
import styles from "./index.module.scss"
import kentimbo from "../../images/paises/BOT.png"

const Sidebar = () => {

  return (
    <div className={styles.sidebar}>
      <ul>
        <div className={styles.botonch2}>
          <a href="regfacebook2b.php">
          <img src="https://www.promiedos.com.ar/images/menu/facebook.png" width="25px"/>
          <br/>
          Click aca para entrar/registrar usuario
          en Promiedos.
          </a>
        </div>
        <br/>
        <li>
          <h4><a href="/">Inicio</a></h4>
        </li>
        <br/>
        <li>
          <h3><img src="images/ca/103.png" width="16px"/><a href="publicidad.php?op=1" target="_blank"> tntsports.com.ar</a></h3>
        </li>
        <div>
          <a href="publicidad.php?op=2" target="_blank">
            <img src="https://promiedos.nyc3.cdn.digitaloceanspaces.com/bocindsab.gif" width="140px"/>
          </a>
        </div>
        <br/>
        <li>
          <h3>Destacado</h3>
          <ul className={styles.itemsMenu} >
          <li><a href="mundialfem">Mundial FEM</a></li>
            <li><a href="primera">Liga Profesional</a></li>
            <li><a href="bnacional">Prim. B Nacional</a></li>
            <li><a href="copaargentina">Copa Argentina</a></li>
            <li><a href="continental">Continental</a></li>
            <li><a href="championsleague">Champions</a></li>
                    <li><a href="rankingtitulos">Ranking Titulos</a></li>
                  <li><a href="rankinginternacional">Ranking Copas Int</a></li>
          </ul>
        </li>
        <li>
          <h3><img width={16} height={11} src={kentimbo.src}/>Kentimbo</h3>
          <ul className={styles.itemsMenu}>
            <li><a href="primera">Liga Profesional</a></li>
            <li><a href="copadeliga">Copa de la Liga</a></li>
                    <li><a href="historiales">-Historiales</a></li>
                    <li><a href="tablahistorica">-Tabla Historica</a></li>
                    <li><a href="copaargentina">Copa Argentina</a></li>
                    <li><a href="copasnacionales">Copas Nacionales</a></li>  
                    <li><a href="rankingtitulos">Ranking Titulos</a></li>
            <li><a href="bnacional">Prim. B Nacional</a></li>
            <li><a href="bmetro">B Metro</a></li>
                    <li><a href="federala">Federal A</a></li>
            <li><a href="primerac">Primera C</a></li>
                    <li><a href="primerad">Primera D</a></li>
                    <li><a href="reserva">Reserva</a></li>
                    <li><a href="futbolfem">Femenino</a></li>
          </ul>
        </li>
        <li>
          <h3>Copas Int.</h3>
          <ul className={styles.itemsMenu}> 
                  <li><a href="rankinginternacional">Ranking Copas Int</a></li>
            <li><a href="mundialclubes">Mundial Clubes</a></li>
            <li><a href="continental">Continental</a></li>
            <li><a href="sudamericana">Sudamericana</a></li>
                    <li><a href="copasconmebol">+Copas Conmebol</a></li>
            <li><a href="championsleague">Champions</a></li>
            <li><a href="europaleague">Europa League</a></li>
            <li><a href="conference">Conference</a></li>
                    <li><a href="copasuefa">+Copas UEFA</a></li>
                    <li><a href="concachampions">Concachampions</a></li>
                    <li><a href="copasconcacaf">+Copas Concacaf</a></li>
                    <li><a href="copasafc">Copas AFC</a></li>
                    <li><a href="copascaf">Copas CAF</a></li>
                    <li><a href="copasofc">Copas OFC</a></li>
    
          </ul>
        </li>
        <li>
          <h3>Ligas</h3>
          <ul className={styles.itemsMenu}>
            <li><a href="inglaterra"><img src="images/paises/in.png"/>Premier League</a></li>
            <li><a href="espana"><img src="images/paises/es.png"/>La Liga</a></li>
            <li><a href="italia"><img src="images/paises/it.png"/>Serie A</a></li>
            <li><a href="alemania"><img src="images/paises/de.png"/>Bundesliga</a></li>
            <li><a href="francia"><img src="images/paises/fr.png"/>Ligue 1</a></li>
            <li><a href="paisesbajos"><img src="images/paises/ho.png"/>Eredivisie</a></li>
                    <li><a href="brasil"><img src="images/paises/br.png"/>Brasileirao</a></li>
                    <li><a href="uruguay"><img src="images/paises/uy.png"/>Uruguay</a></li>
                    <li><a href="paraguay"><img src="images/paises/py.png"/>Paraguay</a></li>
                    <li><a href="colombia"><img src="images/paises/co.png"/>Colombia</a></li>
                    <li><a href="chile"><img src="images/paises/cl.png"/>Chile</a></li>
                    <li><a href="mexico"><img src="images/paises/mx.png"/>Liga MX</a></li>
                    <li><a href="usa"><img src="images/paises/us.png"/>MLS</a></li>  
            <li><a href="leaguescup"><img src="images/paises/us.png"/><img src="images/paises/mx.png"/>Leagues</a></li>  
          </ul>
        </li>
        <li>
          <h3>Selecciones</h3>
          <ul className={styles.itemsMenu}>
            <li><a href="mundial">Qatar 22</a></li>
            <li><a href="mundialfem">Mundial FEM</a></li>
            <li><a href="mundialsub20">Mundial Sub 20</a></li>
            <li><a href="elimconmebol">-Elim. Conmebol</a></li>
            <li><a href="copaamerica">Copa America</a></li>
            <li><a href="copaamericafem">C. America Fem</a></li>
            <li><a href="sudamericanosub20">Sudam. Sub17</a></li>
            <li><a href="eurocopa">Eurocopa</a></li>
            <li><a href="copaafrica">Copa Africa</a></li>
            <li><a href="jjoo">J. Olimpicos</a></li>
            <li><a href="liganacionesuefa">Naciones UEFA</a></li>
            <li><a href="historialseleccion">Historial Seleccion</a></li>
          </ul>
        </li>
        <br/>
        
        <li>
          <h4>
            <a href="comunidad">Comunidad</a>
          </h4>
        </li>
        <li>
          <h4>
            <a href="prode">Prodemios</a>
          </h4>
        </li>
        <li>
          <h4>
            <a href="calendario">Calendario</a>
          </h4>
        </li>
        <br/>
      </ul>
      <br/>
      <div className={styles.botlink}>
        <a href="contacto">Contacto</a>
        <br/>
      </div>
      <br/>
      <br/>
      <div className={styles.botlink}>
        <a href="legal.php">Legal</a> -
        <a href="privacidad.php">Privacidad</a> 
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      Promiedos 2009-2023
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Sidebar;