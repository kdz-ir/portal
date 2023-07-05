import { IGetProfile } from "src/app/core/model/profile-status-info";
import { IDormitoryInfo } from "./idormitory-info";


export interface IDorm {
        profile:   IGetProfile;
        dormitory?: IDormitoryInfo;
}
