import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SensetiveSickness, bloodTypes } from 'src/app/shared/models/bloodTypes';
import { YesOrNoAnswer } from 'src/app/shared/models/yesOrNoAnswer';
import { IOrdooInformationForm } from "./IOrdooInformationForm";
import { isEmpty, isNil } from 'lodash-es';
import { IOrdooData } from './IOrdooData';
import { IPersonalInformationForm } from './IPersonalInformation';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { OrdooService } from '../../services/ordoo.service';
import { Router } from '@angular/router';
import { invalid } from 'jalali-moment';
import { AdditionalValidators } from 'ng-behroozbc-libraries-validators';

@Component({
  selector: 'app-ordoo-register-page',
  templateUrl: './ordoo-register-page.component.html',
  styleUrls: ['./ordoo-register-page.component.scss']
})
export class OrdooRegisterPageComponent implements OnInit, AfterViewInit {
  yesOrNoAnswer = YesOrNoAnswer;
  bloodTypes = bloodTypes;
  sensetiveSickness = SensetiveSickness;
  isLiveInTehran = true;
  inValidControlers = 0;
  inValidFields: string[] = [];
  inValidFieldsName: Record<string, string>;
  fGroup: FormGroup<IOrdooInformationForm>;
  constructor (private readonly _fb: FormBuilder, private readonly _swalService: SwalService, private readonly _ordooService: OrdooService, private readonly _router: Router) {
    this.fGroup = _fb.group<IOrdooInformationForm>({
      placeOfBirthCertificate: _fb.control<string>('', [Validators.required]),
      grades: _fb.control<string>('', [Validators.required]),
      studyField: _fb.control<string>('', [Validators.required]),
      lastGPA: _fb.control<number>(null, [Validators.required]),
      schoolName: _fb.control<string>('', [Validators.required]),
      lastSchoolName: _fb.control<string>('', [Validators.required]),
      email: _fb.control<string>('', [Validators.required, Validators.email]),
      isNavjote: _fb.control<boolean>(null, [Validators.required]),
      isSpecialSickness: _fb.control<boolean>(null, [Validators.required]),
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
      familyHeadDependents: _fb.control<number>(null, [Validators.required,AdditionalValidators.OnlyIntegerNumber]),
      familyHeadMarigeStatus: _fb.control<string>('', [Validators.required]),
      familyHeadOld: _fb.control<number>(null, [Validators.required]),
      familyHeadJob: _fb.control<string>('', [Validators.required]),
      familyHeadGraduationRate: _fb.control<string>('', [Validators.required]),
      familyHeadPhone: _fb.control<string>('', [Validators.required]),
      isLostAnybody: _fb.control<boolean>(null, [Validators.required]),
      familyMembers: _fb.array<FormGroup<IPersonalInformationForm>>([]),
      tehranName: _fb.control<string>(''),
      tehranLastname: _fb.control<string>(''),
      tehranRealtion: _fb.control<string>(''),
      tehranPhone: _fb.control<string>(''),
      tehranHome: _fb.control<string>(''),
      tehranAddress: _fb.control<string>(''),
      haveBeenOrdoo: _fb.control<boolean>(null, [Validators.required]),
      ordooNumber: _fb.control<number>(null),
      haveTriedOrdoo: _fb.control<boolean>(null),
      isCloseFamilyinOrdoo: _fb.control<boolean>(null, [Validators.required]),
      personInOrdooRealtion: _fb.control<string>(''),
      howMeetOrdoo: _fb.control<string>('', [Validators.required]),
      goal: _fb.control<string>('', [Validators.required]),
      goAfterNewPeople: _fb.control<string>('', [Validators.required]),
      goesAfterlongPeopleOrNear: _fb.control<string>('', [Validators.required]),
      likedTopics: _fb.control<string>('', [Validators.required]),
      likeClassSubjects: _fb.control<string>('', [Validators.required]),
      likeSports: _fb.control<string>('', [Validators.required]),
      likeArt: _fb.control<string>('', [Validators.required]),
      likeSpendFreetime: _fb.control<string>('', [Validators.required]),
      freeBeInMarkar: _fb.control<string>('', [Validators.required]),
      likePlaceInTehran: _fb.control<string>('', [Validators.required]),
      goodPoints: _fb.control<string>('', [Validators.required]),
      negetivePoints: _fb.control<string>('', [Validators.required]),
      bestMemory: _fb.control<string>('', [Validators.required]),
      woerstMemory: _fb.control<string>('', [Validators.required]),
      biggestLesson: _fb.control<string>('', [Validators.required]),
      mostInfuence: _fb.control<string>('', [Validators.required]),
      lastAcademicTranscript: _fb.control<string>('', [Validators.required]),
      parentsConsent: _fb.control<string>('', [Validators.required]),
      successesDocument: _fb.control<string>(''),
      wantBloodTest: _fb.control<boolean>(null, [Validators.required])
    });

    this.fGroup.valueChanges.subscribe(c => {
      localStorage.setItem("ordooForm", JSON.stringify(c));
      this.inValidControlers = 0;
      this.inValidFields = [];
      if (this.fGroup.invalid) {
        let recursiveFunc = (form: FormGroup | FormArray) => {
          Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control.invalid) {
              this.inValidControlers++;
              this.inValidFields.push(this.inValidFieldsName[field]);
            };
            if (control instanceof FormGroup) {
              recursiveFunc(control);
            } else if (control instanceof FormArray) {
              recursiveFunc(control);
            }
          });
        };
        recursiveFunc(this.fGroup);
      }
    });
    this.fGroup.controls.familyHeadDependents.valueChanges.subscribe(c => {
      if (isNil(c)) {
        return;
      }
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
        this.fGroup.controls.otherSensetiveSickness.addValidators([Validators.required]);
        this.fGroup.controls.drug.addValidators([Validators.required]);
      }
      else {
        console.log('change validators.');

        this.fGroup.controls.sensetiveSickness.clearValidators();
        this.fGroup.controls.sensetiveSickness.updateValueAndValidity();
        this.fGroup.controls.otherSensetiveSickness.clearValidators();
        this.fGroup.controls.otherSensetiveSickness.updateValueAndValidity();
        this.fGroup.controls.drug.clearValidators();
        this.fGroup.controls.drug.updateValueAndValidity();
      }
    });
    this.fGroup.controls.isCloseFamilyinOrdoo.valueChanges.subscribe(c => {
      if (c) {
        this.fGroup.controls.personInOrdooRealtion.addValidators([Validators.required]);
      }
      else {
        this.fGroup.controls.personInOrdooRealtion.clearValidators();
        this.fGroup.controls.personInOrdooRealtion.updateValueAndValidity();

      }
    });
    this.fGroup.controls.haveBeenOrdoo.valueChanges.subscribe(c => {
      if (c) {
        this.fGroup.controls.ordooNumber.addValidators([Validators.required]);
      }
      else {
        this.fGroup.controls.ordooNumber.clearValidators();
        this.fGroup.controls.ordooNumber.updateValueAndValidity();
      }
    });
    this.inValidFieldsName = {
      'mostInfuence': 'چه کسانی بیشترین تاثیرگذاری را بر روی شمادارند؟چرا؟',
      'biggestLesson': 'کی از بزرگترین درس هایی که تا امروز درزندگیتان یاد گرفتید، بنویسید.',
      'woerstMemory': 'یکی از بدترین خاطرات خود را بنویسید.',
      'bestMemory': 'یکی ازبهترین خاطرات خود را بنویسید.',
      'negetivePoints': 'چه مسائلی در مورد خودتان هست که دوست دارید بهبود بدهید؟',
      'goodPoints': 'چه ویژگی‌هایی در مورد خودتان هست که آنها را نقاط قوت خود می دانید؟',
      'likePlaceInTehran': 'دوست دارید از چه مکان‌هایی در تهران بازدید کنید؟',
      'likeSpendFreetime': 'دوست دارید زمان آزاد خود را چگونه بگذرانید؟',
      'freeBeInMarkar': 'فرض کنید صبح یکی از روزهای اردو وقتی از درب خوابگاه بیرون می‌روید، هیچ یک از برگزار کننده‌ها در مارکار حضور ندارند در آن روز چه فعالیت‌هایی انجام می‌دهید؟',
      'likeArt': 'دوست دارید چه فعالیت‌های هنری را امتحان کنید؟',
      'likeSports': 'دوست دارید چه فعالیت‌های ورزشی را تجربه کنید؟',
      'likeClassSubjects': 'دوست دارید چه موضوعات و فعالیتهایی را در کلاس های آموزشی یاد بگیرید؟',
      'likedTopics': 'ج) فرض کنید نیم ساعت گذشته و معلم پرورشی وارد کلاس می‌شود و شما را به گروه‌های مختلف تقسیم می‌کند و به شما فرصت می‌دهد تا موضوعی را برای بحث انتخاب کنید، شما چه موضوعی را مناسب می‌دانید و برایتان جذاب است؟',
      'goesAfterlongPeopleOrNear': 'ب) دوست دارید با تمام بچه‌های کلاس آشنا شوید یا اینکه با افراد اطراف خود بیشتر صحبت کنید؟',
      'goAfterNewPeople': 'الف) آیا در این مدت تلاش می‌کنید تا با افراد دیگر ارتباط برقرار کنید و با آن‌ها دوست شوید، یا ترجیح می‌دهید دیگران با شما شروع به صحبت کنند؟',
      'goal': 'چرا دوست دارید در اردو شرکت کنید؟ هدف شما از ثبت‌نام در اردو امسال چیست؟',
      'howMeetOrdoo': 'چقدر و از چه راهی با کانون و برنامه‌های آن از جمله اردو، آشنایی دارید؟',
      'personInOrdooRealtion': 'در صورت پر کردن، نام و نسبت آنها را با خود بنویسید',
      'isCloseFamilyinOrdoo': 'آیا هیچ یک از دوستان یا اقوام نزدیک شما تقاضانامه‌ی شرکت در اردوی امسال را پر کرده‌اند؟',
      'haveTriedOrdoo': 'آیا تا به حال برای شرکت در اردوی دانش آموزان کانون دانشجویان زرتشتی اقدام کرده‌اید؟',
      'ordooNumber': 'در صورت شرکت، کدام اردو؟',
      'haveBeenOrdoo': 'آیا تا به حال در اردوی دانش آموزان کانون دانشجویان زرتشتی شرکت کرده اید؟',
      'phone': 'تلفن همراه',
      'graduationRate': 'میزان تحصیلات',
      'job': 'شغل',
      'old': 'سن',
      'marigeStatus': 'وضعیت تاهل',
      'realtion': 'نسبت',
      'lastName': 'نام خانوادگی',
      'name': 'نام',
      'isLostAnybody': 'آیا فردی از خانواده خود را از دست داده‌اید؟',
      'familyHeadPhone': 'تلفن همراه',
      'familyHeadGraduationRate': 'میزان تحصیلات',
      'familyHeadJob': 'شغل',
      'familyHeadOld': 'سن',
      'familyHeadMarigeStatus': 'وضعیت تاهل',
      'familyHeadDependents': 'تعداد افراد تحت تکفل سرپرست خانواده',
      'familyHeadRealtion': 'نسبت سرپرست خانواده با شما',
      'familyHeadLastName': 'نام خانوادگی سرپرست خانواده',
      'familyHeadName': 'نام سرپرست خانواده',
      'successesDocument': 'مدرک مربوط به موفقیت‌تان',
      'parentsConsent': ' تعهدنامه و رضایت‌نامه والدین به صورت',
      'lastAcademicTranscript': 'آخرین کارنامه تحصیلی',
      'clothesWidth': 'عرض',
      'clothesHeight': 'ارتفاع',
      'wantBloodTest': 'درصورتی که تمایل دارید تا از شما آزمایش خون گرفته شود گزینه "بله" را انتخاب نمایید.',
      'bloodType': 'گروه خونی خود را وارد کنید',
      'height': 'قد خود را به سانتیمتر وارد کنید',
      'weight': 'وزن خود را به کیلوگرم وارد کنید',
      'allergicFood': 'در صورت داشتن حساسیت غذایی نوع ماده‌ی غذایی را ذکر کنید.',
      'drug': 'در صورت ابتلا به یکی از موارد فوق چه دارویی مصرف میکنید و چه مدت است به این بیماری مبتلا هستید؟ نوع دقیق آن را ذکر کنید.',
      'otherSensetiveSickness': 'در صورتی که به بیماری خاص دیگری مبتلا هستید، نام آن را بنویسید.',
      'sensetiveSickness': 'چنانچه به هر یک از بیماری‌های زیر مبتلا هستید، در مقابل آن علامت بزنید؟',
      'isSpecialSickness': 'آیا مبتلا به بیماری خاصی هستید؟',
      'isNavjote': 'آیا سدره پوش شده‌اید؟',
      'email': 'آدرس پست الکترونیک',
      'lastSchoolName': 'نام مدرسه محل تحصیل سال گذشته',
      'schoolName': 'نام مدرسه محل تحصیل سال جاری',
      'lastGPA': 'معدل سال گذشته',
      'studyField': 'رشته تحصیلی',
      'grades':'مقطع تحصیلی',
      'placeOfBirthCertificate':'محل صدور شناسنامه'
    };
  }
  ngAfterViewInit(): void {
    this._ordooService.isLiveInTehran.subscribe(c => {
      this.isLiveInTehran = c.entity.isLiveInTehran;
      if (!this.isLiveInTehran) {
        this.fGroup.controls.tehranName.addValidators([Validators.required]);
        this.fGroup.controls.tehranLastname.addValidators([Validators.required]);
        this.fGroup.controls.tehranRealtion.addValidators([Validators.required]);
        this.fGroup.controls.tehranPhone.addValidators([Validators.required]);
        this.fGroup.controls.tehranHome.addValidators([Validators.required]);
        this.fGroup.controls.tehranAddress.addValidators([Validators.required]);

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
    await this._ordooService.registerOrdoo(<IOrdooData>this.fGroup.value).toPromise();
    await this._swalService.successFullRegister();
    this._router.navigate(['/']);
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
