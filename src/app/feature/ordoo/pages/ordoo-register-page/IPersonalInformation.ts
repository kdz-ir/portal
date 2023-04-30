import { FormControl } from "@angular/forms";

export interface IPersonalInformationForm {
  name: FormControl<string>;
  lastName: FormControl<string>;
  realtion: FormControl<string>;
  marigeStatus: FormControl<string>;
  old: FormControl<number>;
  job: FormControl<string>;
  graduationRate: FormControl<string>;
  phone: FormControl<string>;
}
export interface IPersonalInformationData {
  name: string;
  lastName: string;
  realtion: string;
  marigeStatus: string;
  old: number;
  job: string;
  graduationRate: string;
  phone: string;
}
