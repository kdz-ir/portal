import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../Services/repository.service';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'tracker-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  constructor (fb: FormBuilder,
    private readonly _repositoryService: RepositoryService,
    private readonly _authService: AuthenticationService,
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _router: Router, private _dialog: MatDialog) {
    this.loginForm = fb.group({
      phoneNumber: [, [Validators.required, ValidatorCoreService.PhoneNumber]],
      password: [, [Validators.required, Validators.minLength(6)]],
      captcha: [, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {

    //TODO: Remove when catpcha active
    if (this.loginForm.invalid) {
      return;
    }
    const formValue = this.loginForm.value;
    this.isLoading = true;
    this._repositoryService.Login({ natinoal: formValue.phoneNumber, password: formValue.password, token: })
      .subscribe(t => {
        this._router.navigate(['/']);
      }, () => this.isLoading = false);
  }
}
