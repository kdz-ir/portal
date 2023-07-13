import { IBaseProfileShow } from "src/app/shared/modules/shared-profile/models/IBaseProfileShow";

export interface ProfileStatusInfo {
    status: boolean;
    message: string;
    entity: null;
}
export interface CheckFieldStatus {
    status: boolean;
    message: null;
    entity: null;
}
export interface IGetProfileRoot {
    profile: IGetProfile;
    isCompleted: boolean;
    editable: boolean;
}

export interface IGetProfile extends IBaseProfileShow {
    nationalCode: string;
    address: string;
    fatherName: string;
    phone: string;
    postalCode: string;
    created_at: string;
}
