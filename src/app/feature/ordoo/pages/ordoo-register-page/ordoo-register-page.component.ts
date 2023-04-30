import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SensetiveSickness, bloodTypes } from 'src/app/shared/models/bloodTypes';
import { YesOrNoAnswer } from 'src/app/shared/models/yesOrNoAnswer';
import { IPersonalInformation } from './IPersonalInformation';

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
      tehranAddress: fb.control<string>('', [Validators.required]),
      haveBeenOrdoo: fb.control<boolean>(false, [Validators.required]),
      ordooNumber: fb.control<number>(null),
      haveTriedOrdoo: fb.control<boolean>(false),
      isCloseFamilyinOrdoo: fb.control<boolean>(null, [Validators.required]),
      personInOrdooRealtion: fb.control<string>(''),
      howMeetOrdoo: fb.control<string>('', [Validators.required]),
      goal: fb.control<string>('', [Validators.required]),
      likeClassSubjects: fb.control<string>('', [Validators.required]),
      likeSports: fb.control<string>('', [Validators.required]),
      likeArt: fb.control<string>('', [Validators.required]),
      likeSpendFreetime: fb.control<string>('', [Validators.required]),
      likePlaceInTehran: fb.control<string>('', [Validators.required]),
      goodPoints: fb.control<string>('', [Validators.required]),
      negetivePoints: fb.control<string>('', [Validators.required]),
      bestMemory: fb.control<string>('', [Validators.required]),
      woerstMemory: fb.control<string>('', [Validators.required]),
      biggestLesson: fb.control<string>('', [Validators.required]),
      mostInfuence: fb.control<string>('', [Validators.required]),
      lastAcademicTranscript: fb.control<string>('', [Validators.required]),
      commitmentLetter: fb.control<string>('', [Validators.required]),
      parentsConsent: fb.control<string>('', [Validators.required]),
      successesDocument: fb.control<string>('', [Validators.required]),
    });
  }

}
