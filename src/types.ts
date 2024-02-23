export interface ICountry {
    code: string;
    flag:string;
    name:string;
}

export interface ILeague {
  country: ICountry;
  league:{id:string;logo:string;name:string;type:string;}
 
}

export interface ITeam {
  team:{
    code: string;
    country: string,
    founded: number,
    id: number,
    logo: string,
    name: string,
    national: boolean
  },
  venue:{
    address: string,
    capacity: number,
    city:  string,
    id: number,
    image: string,
    name: string,
    surface: string,
  }
}

export interface IPlayer {
    player_age:string;
    player_assists:string;
    player_birthdate:string;
    player_blocks:string;
    player_clearances:string;
    player_country:string;
    player_crosses_total:string;
    player_dispossesed:string;
    player_dribble_attempts:string;
    player_dribble_succ:string;
    player_duels_total:string;
    player_duels_won:string;
    player_fouls_committed:string;
    player_goals:string;
    player_goals_conceded:string;
    player_id:string;
    player_image:string;
    player_injured:string;
    player_inside_box_saves:string;
    player_interceptions:string;
    player_is_captain:string;
    player_key:number;
    player_key_passes:string;
    player_match_played:string;
    player_name:string;
    player_number:string;
    player_passes:string;
    player_passes_accuracy:string;
    player_pen_comm:string;
    player_pen_missed:string;
    player_pen_scored:string;
    player_pen_won:string;
    player_rating:string;
    player_red_cards:string;
    player_saves:string;
    player_shots_total:string;
    player_substitute_out:string;
    player_substitutes_on_bench:string;
    player_tackles:string;
    player_type:string;
    player_woordworks:string;
    player_yellow_cards:string;
}

export interface ICoach {
    coach_age:string;
    coach_country:string;
    coach_name:string;
}

export interface ITeamFixture {
  equipoId: number;
  puntos: number;
  partidosGanados: number;
  partidosEmpatados: number;
  partidosPerdidos: number;
  golesAFavor: number;
  golesEnContra: number;
  diferenciaDeGoles: number;
}

export interface Resultado {
  equipoLocal:number;
  equipoVisitante:number;
  golesLocal:number;
  golesVisitantes:number;
  goleadoresLocal:string;
  goleadoresVisitantes:string;
  finalizado:boolean;
}

export interface IResultadosPrimera {
  resultados: Resultado[];
}


export interface IEquipos {
  id: number;
  name: string;
  escudo: string;
}