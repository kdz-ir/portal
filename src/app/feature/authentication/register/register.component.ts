import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../Services/repository.service';
import { MatStepper } from '@angular/material/stepper';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateUserInfo } from '../model/create-user-info';
import { TimerService } from '../Services/timer.service';

@Component({
  selector: 'karafza-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [TimerService]
})
export class RegisterComponent {
  isloading = false;
  readonly sendSmsForm: FormGroup;
  readonly checkCodeForm: FormGroup;
  readonly userInformationForm: FormGroup;
  @ViewChild(MatStepper) stepper: MatStepper;
  constructor (readonly fb: FormBuilder,
    private readonly _repository: RepositoryService,
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _snackBar: MatSnackBar,
    private readonly _router: Router,
    public readonly _timer: TimerService
  ) {
    this.sendSmsForm = fb.group({
      phoneNumber: [, [Validators.required, Validators.minLength(11), ValidatorCoreService.PhoneNumber]],
      captcha: []
    });
    this.checkCodeForm = fb.group({
      code: [, Validators.required],
      captcha: []
    });
    this.userInformationForm = fb.group({
      nationalCode: [, [Validators.required, ValidatorCoreService.nationalCodeChecker]],
      password: [, [Validators.required, Validators.minLength(6)]],
      captcha:[]
    });
  }
  onSendSms() {
    this.isloading = true;
    this._repository.sendSms(this.sendSmsForm.value.phoneNumber, this.sendSmsForm.value.captcha).subscribe(() => {
      this.stepper.next();
      this._setIsloadingFalse();
    }, () => this._setIsloadingFalse());
  }
  onCheckCodeFromSubmit(stepper: MatStepper) {
    this.isloading = true;
    this._repository.checkCode(this.sendSmsForm.value.phoneNumber, this.checkCodeForm.value.code, this.checkCodeForm.value.captcha).subscribe(t => {
      this._setIsloadingFalse();
        stepper.next();
    }, () => {

      stepper.reset();
      this._setIsloadingFalse();
    });
  }

  onUserInformationSubmit() {
    const userData: CreateUserInfo = {
      mobile: this.sendSmsForm.value.phoneNumber,
      otp: this.checkCodeForm.value.code,
      nationalCode: this.userInformationForm.value.nationalCode,
      token: this.userInformationForm.value.captcha,
      password: this.userInformationForm.value.password
    };
    this.isloading = true;
    this._repository.createUser(userData).subscribe(() => {
      this._setIsloadingFalse();
      this._router.navigate(['/']);
    }, () => this._setIsloadingFalse());
  }
  private _setIsloadingFalse() {
    this.isloading = false;
  }
}
