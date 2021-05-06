import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './register/register.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { RepositoryService } from './Services/repository.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RecaptchaModule, RecaptchaFormsModule, RecaptchaSettings, RECAPTCHA_SETTINGS, RECAPTCHA_LANGUAGE } from "ng-recaptcha";
@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatStepperModule,
    MatTabsModule
  ],
  providers: [
    RepositoryService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha,
      } as RecaptchaSettings,
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: "fa",
    },
  ]
})
export class AuthenticationModule { }
