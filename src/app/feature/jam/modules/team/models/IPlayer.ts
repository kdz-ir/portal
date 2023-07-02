import { ProfileShowEntity } from "src/app/feature/setting/models/profile-info";


export interface IPlayer {
    nationalCode: string;
    field: number;
    subField: number;
    playerType: number;
    ageRange: number;
    playerTypeName: string;
    profile: ProfileShowEntity;
}
