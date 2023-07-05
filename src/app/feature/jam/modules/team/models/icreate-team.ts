import { SportField } from "../../../models/sport-field";
import { SportSubField } from "../../../models/sub-sport-field";
import { AgeRange } from "../../shared/jam-shared/models/age-range";
import { Gender } from "./gender";

export interface ICreateTeam {
    name: string,
    ageRange: AgeRange,
    field: SportField,
    subField: SportSubField,
    coach: string,
    gender: Gender;
}
