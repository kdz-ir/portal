import { Gender } from "src/app/feature/jam/modules/team/models/gender";

export interface IBaseProfileShow {
    name: string;
    sex: string;
    sexRaw: Gender;
    birthday: string;
    city: string;
    personalPhoto: string;
    IdCardPhoto: string;
    family: string;
}