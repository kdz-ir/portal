import { ITeamsList } from "./iteams-list";
import { IPlayer } from "./IPlayer";


export interface ITeam {
    team: ITeamsList;
    players: IPlayer[];
}
