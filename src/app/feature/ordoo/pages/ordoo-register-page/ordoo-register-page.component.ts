import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SensetiveSickness, bloodTypes } from 'src/app/shared/models/bloodTypes';
import { YesOrNoAnswer } from 'src/app/shared/models/yesOrNoAnswer';
import { IOrdooInformationForm } from "./IOrdooInformationForm";
import { isEmpty } from 'lodash-es';
import { IOrdooData } from './IOrdooData';
import { IPersonalInformationForm } from './IPersonalInformation';

@Component({
  selector: 'app-ordoo-register-page',
  templateUrl: './ordoo-register-page.component.html',
  styleUrls: ['./ordoo-register-page.component.scss']
})
export class OrdooRegisterPageComponent implements OnInit {
  yesOrNoAnswer = YesOrNoAnswer;
  bloodTypes = bloodTypes;
  sensetiveSickness = SensetiveSickness;
  fGroup: FormGroup<IOrdooInformationForm>;
  constructor (fb: FormBuilder) {
    this.fGroup = fb.group<IOrdooInformationForm>({
      placeOfBirthCertificate: fb.control<string>('', [Validators.required]),
      grades: fb.control<string>('', [Validators.required]),
      studyField: fb.control<string>('', [Validators.required]),
      lastGPA: fb.control<number>(null, [Validators.required]),
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
      height: fb.control<number>(null, [Validators.required, Validators.min(10)]),
      weight: fb.control<number>(null, [Validators.required, Validators.min(1)]),
      clothesHeight: fb.control<number>(null, [Validators.required]),
      clothesWidth: fb.control<number>(null, [Validators.required]),
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
      familyMembers: fb.array<FormGroup<IPersonalInformationForm>>([fb.group({
        name: fb.control<string>('', [Validators.required]),
        lastName: fb.control<string>('', [Validators.required]),
        realtion: fb.control<string>(null, [Validators.required]),
        marigeStatus: fb.control<string>(null, [Validators.required]),
        old: fb.control<number>(null, [Validators.required]),
        job: fb.control<string>(null, [Validators.required]),
        graduationRate: fb.control<string>(null, [Validators.required]),
        phone: fb.control<string>(null, [Validators.required]),
      })]),
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
    this.fGroup.valueChanges.subscribe(c => {
      localStorage.setItem("ordooForm", JSON.stringify(c));
    });
    this.fGroup.controls.familyHeadDependents.valueChanges.subscribe(c => {
      const dependMembers = c - 1;//Remove the regter person
      const pervisMembers = this.fGroup.controls.familyMembers.controls.length;
      for (let index = pervisMembers; index > dependMembers; index--)
        this.fGroup.controls.familyMembers.controls.pop();
      for (let index = pervisMembers; index < dependMembers; index++)
        this.fGroup.controls.familyMembers.push(fb.group<IPersonalInformationForm>({
          name: fb.control<string>('', [Validators.required]),
          lastName: fb.control<string>('', [Validators.required]),
          realtion: fb.control<string>(null, [Validators.required]),
          marigeStatus: fb.control<string>(null, [Validators.required]),
          old: fb.control<number>(null, [Validators.required]),
          job: fb.control<string>(null, [Validators.required]),
          graduationRate: fb.control<string>(null, [Validators.required]),
          phone: fb.control<string>(null, [Validators.required]),
        }));
      return;


    });
  }
  ngOnInit(): void {
    const form = localStorage.getItem("ordooForm");
    if (!isEmpty(form)) {
      const data = <IOrdooData>JSON.parse(form);
      try {
        this.fGroup.setValue(data);
      }
      catch (e) {
        console.error(e);
      }
    }
  }

}
