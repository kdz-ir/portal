import { ProgramFieldMode } from "src/app/core/model/ProgramFieldMode";
import { IGetProfile } from "src/app/core/model/profile-status-info";

export interface ISetMinimumProfileDialog{
    profile:IGetProfile,
    mode:ProgramFieldMode
}