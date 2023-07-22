import { SportField } from "../../../models/sport-field";
import { SportSubField } from "../../../models/sub-sport-field";
import { IPlayer } from "../../shared/jam-shared/models/IPlayer";

export interface IDoubleTeamDetial {
    name: string;
    id: number;
    ageRangeName: string;
    created: Date;
    fieldName:string;
    subFieldName:string;
    field:SportField;
    subField:SportSubField;
    players: IPlayer[];
}
