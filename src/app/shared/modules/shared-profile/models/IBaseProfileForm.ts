import { FormControl } from "@angular/forms";
import * as moment from "jalali-moment";

export interface IBaseProfileForm {
    nationalCode: FormControl<string>;
    name: FormControl<string>;
    family: FormControl<string>;
    sex: FormControl<number>;
    birthday: FormControl<moment.Moment>;
    IdCardPhoto: FormControl<string>;
    personalPhoto: FormControl<string>;
    city: FormControl<number>;
}