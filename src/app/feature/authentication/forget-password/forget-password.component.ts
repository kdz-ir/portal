import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../Services/repository.service';
import { MatStepper } from '@angular/material/stepper';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmPasswordErrorStateMatcher } from 'src/app/core/services/forms/confirm-password-error-state-matcher';
import { ForgetPasswordInfo } from '../model/forget-password-info';
import { AdditionalValidators } from 'ng-behroozbc-libraries-validators';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  matcher = new ConfirmPasswordErrorStateMatcher();
  isloading = false;
  readonly sendSmsForm: FormGroup;
  readonly checkCodeForm: FormGroup;
  readonly forgetPasswordForm: FormGroup;
  constructor (readonly fb: FormBuilder,
    private readonly _repository: RepositoryService,
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _snackBar: MatSnackBar,
    private readonly _router: Router
  ) {
    this.sendSmsForm = fb.group({
      phoneNumber: [, [Validators.required, Validators.minLength(11), AdditionalValidators.PhoneNumber]],
      nationalCode: [, [ValidatorCoreService.nationalCodeChecker]],
      captcha: []
    });
    this.checkCodeForm = fb.group({
      code: [, Validators.required]
    });
    this.forgetPasswordForm = fb.group({
      password: [, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [, [Validators.required, Validators.minLength(6)]]
    }, { validators: ValidatorCoreService.checkPasswords });
  }

  onSendSms() {
    this.isloading = true;
    this._repository.sendSmsForgetPassword(this.sendSmsForm.value.phoneNumber, this.sendSmsForm.value.nationalCode, this.sendSmsForm.value.capcaptcha)
      .subscribe(() => this._setIsloadingFalse(), () => this._setIsloadingFalse());
  }
  onCheckCodeFromSubmit(stepper: MatStepper) {
    this.isloading = true;
    this._repository.checkCode(this.sendSmsForm.value.phoneNumber, this.checkCodeForm.value.code, this.sendSmsForm.value.captcha).subscribe(t => {
      this._setIsloadingFalse();
      if (t.result) {
        stepper.next();
        return;
      }
      this._snackBar.open('کد شما اشتباه است.');

    }, this._setIsloadingFalse);
  }
  onNewPasswordSubmit() {
    const data: ForgetPasswordInfo = {
      otp: +this.checkCodeForm.value.code,
      mobile: this.sendSmsForm.value.phoneNumber,
      password: this.forgetPasswordForm.value.password,
      token: this.sendSmsForm.value.captcha,
      nationalCode: this.sendSmsForm.value.nationalCodes
    };
    this._repository.forgetPassword(data).subscribe(() => {
      this._router.navigate(['/']);
    });
  }
  private _setIsloadingFalse() {
    this.isloading = false;
  }
}
