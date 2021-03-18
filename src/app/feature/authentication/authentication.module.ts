import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './register/register.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { RepositoryService } from './Services/repository.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthPageComponent, ForgetPasswordComponent],
  imports: [
    AuthenticationRoutingModule,
    SharedModule,
    NgHcaptchaModule.forRoot({ languageCode: 'fa', siteKey: environment.hcaptcha }),
    MatStepperModule,
    MatTabsModule
  ],
  providers: [
    RepositoryService
  ]
})
export class AuthenticationModule { }
