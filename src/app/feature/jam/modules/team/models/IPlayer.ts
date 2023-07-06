import { ProfileShowEntity } from "src/app/feature/setting/models/profile-info";
import { PlayerType } from "../../shared/jam-shared/models/player-type";
import { AgeRange } from "../../shared/jam-shared/models/age-range";
import { SportField } from "../../../models/sport-field";
import { SportSubField } from "../../../models/sub-sport-field";


export interface IPlayer {
    nationalCode: string;
    field: SportField;
    subField: SportSubField;
    playerType: PlayerType;
    ageRange: AgeRange;
    playerTypeName: string;
    profile: ProfileShowEntity;
}
