import { IBaseProfileSaveInfo } from "src/app/shared/modules/shared-profile/models/IBaseProfileSaveInfo";
import { IBaseProfileShow } from "src/app/shared/modules/shared-profile/models/IBaseProfileShow";

export interface ProfileShowInfo {
    status: boolean;
    message: string;
    entity: ProfileShowEntity;
}

export interface ProfileShowEntity extends IBaseProfileShow {
    fatherName: string;
    address: string;
    postalCode?: string;
    phone: string;
}
export interface ProfileSaveInfo extends IBaseProfileSaveInfo {
    fatherName: string;
    address: string;
    postalCode: string;
    phone: string;
}