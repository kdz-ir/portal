import { ITeamsList } from "./iteams-list";
import { IPlayer } from "../../shared/jam-shared/models/IPlayer";


export interface ITeam {
    team: ITeamsList;
    players: IPlayer[];
}
