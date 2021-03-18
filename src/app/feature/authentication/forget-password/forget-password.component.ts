import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../Services/repository.service';
import { MatStepper } from '@angular/material/stepper';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmPasswordErrorStateMatcher } from 'src/app/core/services/forms/confirm-password-error-state-matcher';
import { ForgetPasswordInfo } from '../model/forget-password-info';
import { Location } from '@angular/common';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent
{
  matcher = new ConfirmPasswordErrorStateMatcher();
  isloading = false;
  readonly sendSmsForm: FormGroup;
  readonly checkCodeForm: FormGroup;
  readonly forgetPasswordForm: FormGroup;
  constructor(readonly fb: FormBuilder,
    private readonly _repository: RepositoryService,
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _snackBar: MatSnackBar,
    private readonly _router: Router,
    private readonly _location: Location
  )
  {
    this.sendSmsForm = fb.group({
      phoneNumber: [, [Validators.required, Validators.minLength(11), ValidatorCoreService.PhoneNumber]],
      captcha: [, [Validators.required]]
    });
    this.checkCodeForm = fb.group({
      code: [, Validators.required]
    });
    this.forgetPasswordForm = fb.group({
      password: [, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [, [Validators.required, Validators.minLength(6)]]
    }, { validators: ValidatorCoreService.checkPasswords });
  }

  onSendSms()
  {
    this.isloading = true;
    this._repository.sendSmsForgetPassword(+this.sendSmsForm.value.phoneNumber)
      .subscribe(() => this._setIsloadingFalse(), () => this._setIsloadingFalse());
  }
  onCheckCodeFromSubmit(stepper: MatStepper)
  {
    if (this.checkCodeForm.invalid)
    {
      this._snackBar.open('کد شما اشتباه است.');
      return;
    }
    this.isloading = true;
    this._repository.checkCode(this.sendSmsForm.value.phoneNumber, this.checkCodeForm.value.code).subscribe(t =>
    {
      this._setIsloadingFalse();
      if (t.result)
      {
        stepper.next();
        return;
      }
      this._snackBar.open('کد شما اشتباه است.');

    }, this._setIsloadingFalse.bind(this));
  }
  onNewPasswordSubmit()
  {
    const data: ForgetPasswordInfo = {
      code: +this.checkCodeForm.value.code,
      phoneNumber: this.sendSmsForm.value.phoneNumber,
      password: this.forgetPasswordForm.value.password,
      confirmPassword: this.forgetPasswordForm.value.confirmPassword
    };
    this._repository.forgetPassword(data).subscribe(() =>
    {
      this._router.navigate(['/']);
    });
  }
  private _setIsloadingFalse()
  {
    this.isloading = false;
  }
  backPage()
  {
    this._location.back();
  }
}
