import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SensetiveSickness, bloodTypes } from 'src/app/shared/models/bloodTypes';
import { YesOrNoAnswer } from 'src/app/shared/models/yesOrNoAnswer';
import { IOrdooInformationForm } from "./IOrdooInformationForm";
import { isEmpty } from 'lodash-es';
import { IOrdooData } from './IOrdooData';
import { IPersonalInformationForm } from './IPersonalInformation';
import { SwalService } from 'src/app/core/services/swal/swal.service';

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
  constructor (private readonly _fb: FormBuilder, private readonly _swalService: SwalService) {
    this.fGroup = _fb.group<IOrdooInformationForm>({
      placeOfBirthCertificate: _fb.control<string>('', [Validators.required]),
      grades: _fb.control<string>('', [Validators.required]),
      studyField: _fb.control<string>('', [Validators.required]),
      lastGPA: _fb.control<number>(null, [Validators.required]),
      schoolName: _fb.control<string>('', [Validators.required]),
      lastSchoolName: _fb.control<string>('', [Validators.required]),
      email: _fb.control<string>('', [Validators.required, Validators.email]),
      isNavjote: _fb.control<boolean>(null, [Validators.required]),
      isSpecialSickness: _fb.control<boolean>(false, [Validators.required]),
      sensetiveSickness: _fb.control<string[]>([]),
      otherSensetiveSickness: _fb.control<string>(''),
      drug: _fb.control<string>(''),
      allergicFood: _fb.control<string>(''),
      bloodType: _fb.control<string>('', [Validators.required]),
      height: _fb.control<number>(null, [Validators.required, Validators.min(10)]),
      weight: _fb.control<number>(null, [Validators.required, Validators.min(1)]),
      clothesHeight: _fb.control<number>(null, [Validators.required]),
      clothesWidth: _fb.control<number>(null, [Validators.required]),
      familyHeadName: _fb.control<string>('', [Validators.required]),
      familyHeadLastName: _fb.control<string>('', [Validators.required]),
      familyHeadRealtion: _fb.control<string>('', [Validators.required]),
      familyHeadDependents: _fb.control<number>(1, [Validators.required]),
      familyHeadMarigeStatus: _fb.control<string>('', [Validators.required]),
      familyHeadOld: _fb.control<number>(null, [Validators.required]),
      familyHeadJob: _fb.control<string>('', [Validators.required]),
      familyHeadGraduationRate: _fb.control<string>('', [Validators.required]),
      familyHeadPhone: _fb.control<string>('', [Validators.required]),
      isLostAnybody: _fb.control<boolean>(null, [Validators.required]),
      familyMembers: _fb.array<FormGroup<IPersonalInformationForm>>([this._addMember()]),
      tehranName: _fb.control<string>('', [Validators.required]),
      tehranLastname: _fb.control<string>('', [Validators.required]),
      tehranRealtion: _fb.control<string>('', [Validators.required]),
      tehranPhone: _fb.control<string>('', [Validators.required]),
      tehranHome: _fb.control<string>('', [Validators.required]),
      tehranAddress: _fb.control<string>('', [Validators.required]),
      haveBeenOrdoo: _fb.control<boolean>(false, [Validators.required]),
      ordooNumber: _fb.control<number>(null),
      haveTriedOrdoo: _fb.control<boolean>(false),
      isCloseFamilyinOrdoo: _fb.control<boolean>(null, [Validators.required]),
      personInOrdooRealtion: _fb.control<string>(''),
      howMeetOrdoo: _fb.control<string>('', [Validators.required]),
      goal: _fb.control<string>('', [Validators.required]),
      likeClassSubjects: _fb.control<string>('', [Validators.required]),
      likeSports: _fb.control<string>('', [Validators.required]),
      likeArt: _fb.control<string>('', [Validators.required]),
      likeSpendFreetime: _fb.control<string>('', [Validators.required]),
      likePlaceInTehran: _fb.control<string>('', [Validators.required]),
      goodPoints: _fb.control<string>('', [Validators.required]),
      negetivePoints: _fb.control<string>('', [Validators.required]),
      bestMemory: _fb.control<string>('', [Validators.required]),
      woerstMemory: _fb.control<string>('', [Validators.required]),
      biggestLesson: _fb.control<string>('', [Validators.required]),
      mostInfuence: _fb.control<string>('', [Validators.required]),
      lastAcademicTranscript: _fb.control<string>('', [Validators.required]),
      commitmentLetter: _fb.control<string>('', [Validators.required]),
      parentsConsent: _fb.control<string>('', [Validators.required]),
      successesDocument: _fb.control<string>('', [Validators.required]),
      wantBloodTest: _fb.control<boolean>(true, [Validators.required])
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
        this.fGroup.controls.familyMembers.push(this._addMember());
    });
    this.fGroup.controls.isSpecialSickness.valueChanges.subscribe(c => {
      if (c) {
        this.fGroup.controls.sensetiveSickness.addValidators([Validators.required]);
        this.fGroup.controls.sensetiveSickness.addValidators([Validators.required]);
        this.fGroup.controls.otherSensetiveSickness.addValidators([Validators.required]);
        this.fGroup.controls.drug.addValidators([Validators.required]);
      }
      else {
        this.fGroup.controls.sensetiveSickness.clearValidators();
        this.fGroup.controls.sensetiveSickness.clearValidators();
        this.fGroup.controls.otherSensetiveSickness.clearValidators();
        this.fGroup.controls.drug.clearValidators();
      }
    });
    this.fGroup.controls.isCloseFamilyinOrdoo.valueChanges.subscribe(c => {
      if (c) {
        this.fGroup.controls.personInOrdooRealtion.addValidators([Validators.required]);
      }
      else {
        this.fGroup.controls.personInOrdooRealtion.clearValidators();
      }
    });
    this.fGroup.controls.haveBeenOrdoo.valueChanges.subscribe(c => {
      if (c) {
        this.fGroup.controls.ordooNumber.addValidators([Validators.required]);
      }
      else {
        this.fGroup.controls.ordooNumber.clearValidators();
      }
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
  async onFormSubmited() {
    await this._swalService.successFullRegister();
    await this._swalService.swal.fire({
      title: 'این تستی بود!',
      icon: 'warning'
    });
  }
  private _addMember() {
    return this._fb.group<IPersonalInformationForm>({
      name: this._fb.control<string>('', [Validators.required]),
      lastName: this._fb.control<string>('', [Validators.required]),
      realtion: this._fb.control<string>(null, [Validators.required]),
      marigeStatus: this._fb.control<string>(null, [Validators.required]),
      old: this._fb.control<number>(null, [Validators.required]),
      job: this._fb.control<string>(null, [Validators.required]),
      graduationRate: this._fb.control<string>(null, [Validators.required]),
      phone: this._fb.control<string>(null, [Validators.required]),
    });
  }
}
