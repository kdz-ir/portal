import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../Services/repository.service';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { environment } from '../../../../environments/environment';
import { AdditionalValidators } from 'ng-behroozbc-libraries-validators';
import { ILoginForm } from './ILoginForm';
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
    private readonly _authService: AuthenticationService,
    public readonly validatorCoreService: ValidatorCoreService,
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
      }, () => this.isLoading = false);
  }
}
