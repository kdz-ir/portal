import { IBaseProfileSaveInfo } from "./IBaseProfileSaveInfo";

export interface IMinimumProfileSaveInfo extends IBaseProfileSaveInfo{
    sportInsurance: string;
    nationalCode: string;
}