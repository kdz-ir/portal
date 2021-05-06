import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
