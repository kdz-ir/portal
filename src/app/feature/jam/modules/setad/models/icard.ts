import { ProfileShowEntity } from "src/app/feature/setting/models/profile-info";

export interface ICard 
{
    fields: string;
    profile: ProfileShowEntity;
    ageRangeName: string;
}