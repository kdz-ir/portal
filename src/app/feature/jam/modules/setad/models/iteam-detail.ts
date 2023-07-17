import { IPlayer } from "../../shared/jam-shared/models/IPlayer";
import { ITeamsList } from "./iteams-list";

export interface ITeamDetail extends ITeamsList {
    players: IPlayer[];
}
