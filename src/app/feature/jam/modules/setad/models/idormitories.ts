import { ProfileShowEntity } from "src/app/feature/setting/models/profile-info";

export interface IDormitories {
    profile: ProfileShowEntity;
    refId: string;
    authority: string;
    type: number;
    nationalCode: string;
    userCode: string;
    userCodeProfile:ProfileShowEntity;
    created:Date;
}
