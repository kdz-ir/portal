import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../Services/repository.service';
import { Router } from '@angular/router';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { AdditionalValidators } from 'ng-behroozbc-libraries-validators';
import { ILoginForm } from './ILoginForm';
import { SwalService } from 'src/app/core/services/swal/swal.service';
@Component({
  selector: 'kdz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup<ILoginForm>;
  isLoading = false;
  constructor (fb: FormBuilder,
    private readonly _repositoryService: RepositoryService,
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _swalService: SwalService,
    private readonly _router: Router) {
    this.loginForm = fb.group<ILoginForm>({
      nationalCode: fb.nonNullable.control('', [Validators.required, ValidatorCoreService.nationalCodeChecker, AdditionalValidators.CheckIsASCII]),
      password: fb.nonNullable.control('', [Validators.minLength(6)]),
      captcha: fb.control<string>(null)
    });
  }

  onSubmit() {
    const formValue = this.loginForm.value;
    this.isLoading = true;
    this._repositoryService.Login({ nationalCode: formValue.nationalCode, password: formValue.password, token: formValue.captcha })
      .subscribe(t => {
        this._router.navigate(['/']);
      }, (error) => {
        this._swalService.showErrorMessage(error.error.message);

        this.isLoading = false;
      });
  }
}
