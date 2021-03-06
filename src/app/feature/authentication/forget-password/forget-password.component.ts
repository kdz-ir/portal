import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../Services/repository.service';
import { MatStepper } from '@angular/material/stepper';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmPasswordErrorStateMatcher } from 'src/app/core/services/forms/confirm-password-error-state-matcher';
import { ForgetPasswordInfo } from '../model/forget-password-info';
import { AdditionalValidators } from 'ng-behroozbc-libraries-validators';
import { SwalService } from 'src/app/core/services/swal/swal.service';
@Component({
  selector: 'kdz-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  matcher = new ConfirmPasswordErrorStateMatcher();
  isloading = false;
  readonly sendSmsForm: FormGroup;
  readonly checkCodeForm: FormGroup;
  readonly forgetPasswordForm: FormGroup;
  @ViewChild(MatStepper) stepper: MatStepper;
  constructor (readonly fb: FormBuilder,
    private readonly _repository: RepositoryService,
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _snackBar: MatSnackBar,
    private readonly _router: Router,
    private readonly _swal: SwalService,
  ) {
    this.sendSmsForm = fb.group({
      nationalCode: [, [ValidatorCoreService.nationalCodeChecker, Validators.required, AdditionalValidators.CheckIsASCII]],
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
    this._repository.sendSmsForgetPassword(this.sendSmsForm.value.nationalCode, this.sendSmsForm.value.captcha)
      .subscribe((c) => {
        this._swal.swal.fire({
          title: `???? ?????????? ???????? ???????? ?????? ?????????? ????.`,
          icon: 'info',
          html: `???? ???????? ?????????????? ???????? ???????????? ?????? ????<br> ?????????? ???? ???? ?????????? ${c.entity.mobile} ?????????? ???????? ??????.<br>???? ?????????? ?????? ???? ???? ???????? ???????????? ???????? ????????
          <br><span style="color:red">?????? ?????????? ?????? ???????? ?????? ???????? ???????? ???? ???????? ?????????? ???????? ????????????</span>
          `
        });
        this._setIsloadingFalse();
      }, () => { this._setIsloadingFalse(); this.stepper.reset(); });
  }
  onCheckCodeFromSubmit(stepper: MatStepper) {
    this.isloading = true;
    this._repository.forgetSmsVerify(this.sendSmsForm.value.nationalCode,this.checkCodeForm.value.code, this.sendSmsForm.value.captcha).subscribe(t => {
      this._setIsloadingFalse();
      stepper.next();



    }, this._setIsloadingFalse.bind(this));
  }
  onNewPasswordSubmit() {
    const data: ForgetPasswordInfo = {
      otp: +this.checkCodeForm.value.code,
      mobile: this.sendSmsForm.value.phoneNumber,
      password: this.forgetPasswordForm.value.password,
      token: this.sendSmsForm.value.captcha,
      nationalCode: this.sendSmsForm.value.nationalCode
    };
    this._repository.forgetPassword(data).subscribe(async () => {
      this._swal.swal.fire({
        title: '?????? ?????? ???? ???????????? ?????? ????.',
        confirmButtonText: '????????',
        icon: 'success'
      });
      this._router.navigate(['/Authentication']);

    });
  }
  private _setIsloadingFalse() {
    this.isloading = false;
  }
}
