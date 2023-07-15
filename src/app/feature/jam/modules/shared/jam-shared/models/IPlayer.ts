import { ProfileShowEntity } from "src/app/feature/setting/models/profile-info";
import { PlayerType } from "./player-type";
import { AgeRange } from "./age-range";
import { SportField } from "../../../../models/sport-field";
import { SportSubField } from "../../../../models/sub-sport-field";


export interface IPlayer {
    nationalCode: string;
    field: SportField;
    subField: SportSubField;
    playerType: PlayerType;
    fieldName: string;
    subFieldName: string;
    ageRange: AgeRange;
    playerTypeName: string;
    profile: ProfileShowEntity;
}
