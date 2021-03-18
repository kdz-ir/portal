import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../Services/repository.service';
import { MatStepper } from '@angular/material/stepper';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'tracker-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent
{
  isloading = false;
  readonly sendSmsForm: FormGroup;
  readonly checkCodeForm: FormGroup;
  readonly userInformationForm: FormGroup;
  constructor(readonly fb: FormBuilder,
    private readonly _repository: RepositoryService,
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _snackBar: MatSnackBar,
    private readonly _router: Router
  )
  {
    this.sendSmsForm = fb.group({
      phoneNumber: [, [Validators.required, Validators.minLength(11), ValidatorCoreService.PhoneNumber]],
      captcha: [, [Validators.required]]
    });
    this.checkCodeForm = fb.group({
      code: [, Validators.required]
    });
    this.userInformationForm = fb.group({
      fullName: [, [Validators.required]],
      email: [, [Validators.email, Validators.required]],
      newsSubscription: [true],
      password: [, [Validators.required, Validators.minLength(6)]]
    });
  }
  onSendSms()
  {
    this.isloading = true;
    this._repository.sendSms(this.sendSmsForm.value.phoneNumber).subscribe(() => this._setIsloadingFalse()
      , this._setIsloadingFalse.bind(this));
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
    }, this._setIsloadingFalse);
  }
  onUserInformationSubmit()
  {
    const userData = {
      phoneNumber: this.sendSmsForm.value.phoneNumber,
      code: this.checkCodeForm.value.code,
      fullName: this.userInformationForm.value.fullName,
      email: this.userInformationForm.value.email,
      newsSubscription: this.userInformationForm.value.newsSubscription,
      password: this.userInformationForm.value.password
    };
    this.isloading = true;
    this._repository.createUser(userData).subscribe(() =>
    {
      this._setIsloadingFalse();
      this._router.navigate(['/DeviceManger']);
    }, this._setIsloadingFalse);
  }
  private _setIsloadingFalse()
  {
    this.isloading = false;
  }
}
