import { SportField } from "../../models/sport-field";
import { SportSubField } from "../../models/sub-sport-field";
import { AgeRange } from "../../shared/jam-shared/models/age-range";

export interface ITeamsList {
    id: number;
    name: string;
    field: SportField;
    subField: SportSubField;
    fieldName: string;
    subFieldName: string;
    ageRange: AgeRange;
    ageRangeName: string;
}

