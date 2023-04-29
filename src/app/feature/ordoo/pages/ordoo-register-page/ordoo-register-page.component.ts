import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SensetiveSickness, bloodTypes } from 'src/app/shared/models/bloodTypes';
import { YesOrNoAnswer } from 'src/app/shared/models/yesOrNoAnswer';

@Component({
  selector: 'app-ordoo-register-page',
  templateUrl: './ordoo-register-page.component.html',
  styleUrls: ['./ordoo-register-page.component.scss']
})
export class OrdooRegisterPageComponent {
  yesOrNoAnswer = YesOrNoAnswer;
  bloodTypes = bloodTypes;
  sensetiveSickness = SensetiveSickness;
  fGroup: FormGroup<IPersonalInformation>;
  constructor (fb: FormBuilder) {
    this.fGroup = fb.group<IPersonalInformation>({
      placeOfBirthCertificate: fb.control<string>('', [Validators.required]),
      grades: fb.control<string>('', [Validators.required]),
      studyField: fb.control<string>('', [Validators.required]),
      lastGPA: fb.control<number>(0, [Validators.required]),
      schoolName: fb.control<string>('', [Validators.required]),
      lastSchoolName: fb.control<string>('', [Validators.required]),
      email: fb.control<string>('', [Validators.required, Validators.email]),
      isNavjote: fb.control<boolean>(null, [Validators.required]),
      isSpecialSickness: fb.control<boolean>(false, [Validators.required]),
      sensetiveSickness: fb.control<string[]>([]),
      otherSensetiveSickness: fb.control<string>(''),
      drug: fb.control<string>(''),
      allergicFood: fb.control<string>(''),
      bloodType: fb.control<string>('', [Validators.required]),
      height: fb.control<number>(0, [Validators.required, Validators.min(10)]),
      weight: fb.control<number>(0, [Validators.required, Validators.min(1)]),
      clothesHeight: fb.control<number>(0, [Validators.required]),
      clothesWidth: fb.control<number>(0, [Validators.required]),
      familyHeadName: fb.control<string>('', [Validators.required]),
      familyHeadLastName: fb.control<string>('', [Validators.required]),
      familyHeadRealtion: fb.control<string>('', [Validators.required]),
      familyHeadDependents: fb.control<number>(1, [Validators.required]),
      familyHeadMarigeStatus: fb.control<string>('', [Validators.required]),
      familyHeadOld: fb.control<number>(null, [Validators.required]),
      familyHeadJob: fb.control<string>('', [Validators.required]),
      familyHeadGraduationRate: fb.control<string>('', [Validators.required]),
      familyHeadPhone: fb.control<string>('', [Validators.required]),
      isLostAnybody: fb.control<boolean>(null, [Validators.required]),
      name: fb.control<string>('', [Validators.required]),
      lastName: fb.control<string>('', [Validators.required]),
      realtion: fb.control<string>('', [Validators.required]),
      marigeStatus: fb.control<string>('', [Validators.required]),
      old: fb.control<number>(0, [Validators.required]),
      job: fb.control<string>('', [Validators.required]),
      graduationRate: fb.control<string>('', [Validators.required]),
      phone: fb.control<string>('', [Validators.required]),
      tehranName: fb.control<string>('', [Validators.required]),
      tehranLastname: fb.control<string>('', [Validators.required]),
      tehranRealtion: fb.control<string>('', [Validators.required]),
      tehranPhone: fb.control<string>('', [Validators.required]),
      tehranHome: fb.control<string>('', [Validators.required]),
      tehranAddress: fb.control<string>('', [Validators.required])
    });
  }

}
export interface IPersonalInformation {
  placeOfBirthCertificate: FormControl<string>;
  grades: FormControl<string>;
  studyField: FormControl<string>;
  lastGPA: FormControl<number>;
  schoolName: FormControl<string>;
  lastSchoolName: FormControl<string>;
  email: FormControl<string>;
  isNavjote: FormControl<boolean>;
  isSpecialSickness: FormControl<boolean>;
  sensetiveSickness: FormControl<string[]>;
  otherSensetiveSickness: FormControl<string>;
  drug: FormControl<string>;
  allergicFood: FormControl<string>;
  weight: FormControl<number>;
  height: FormControl<number>;
  bloodType: FormControl<string>;
  clothesHeight: FormControl<number>;
  clothesWidth: FormControl<number>;
  familyHeadName: FormControl<string>;
  familyHeadLastName: FormControl<string>;
  familyHeadRealtion: FormControl<string>;
  familyHeadDependents: FormControl<number>;
  familyHeadMarigeStatus: FormControl<string>;
  familyHeadOld: FormControl<number>;
  familyHeadJob: FormControl<string>;
  familyHeadGraduationRate: FormControl<string>;
  familyHeadPhone: FormControl<string>;
  isLostAnybody: FormControl<boolean>;
  name: FormControl<string>;
  lastName: FormControl<string>;
  realtion: FormControl<string>;
  marigeStatus: FormControl<string>;
  old: FormControl<number>;
  job: FormControl<string>;
  graduationRate: FormControl<string>;
  phone: FormControl<string>;
  tehranName: FormControl<string>;
  tehranLastname: FormControl<string>;
  tehranRealtion: FormControl<string>;
  tehranPhone: FormControl<string>;
  tehranHome: FormControl<string>;
  tehranAddress: FormControl<string>;
  haveBeenOrdoo: FormControl<boolean>;
  ordooNumber: FormControl<boolean>;
  haveTriedOrdoo: FormControl<boolean>;
  isCloseFamilyinOrdoo: FormControl<boolean>;
  personInOrdooRealtion: FormControl<string>;
  howMeetOrdoo: FormControl<string>;
  goal: FormControl<string>;
  likeClassSubjects: FormControl<string>;
  likeSports: FormControl<string>;
  likeArt: FormControl<string>;
  likeSpendFreetime: FormControl<string>;
  likePlaceInTehran: FormControl<string>;
}