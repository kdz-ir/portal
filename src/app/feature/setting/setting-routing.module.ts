import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GetZoroastrianCardComponent } from './get-zoroastrian-card/get-zoroastrian-card.component';
import { LogoutComponent } from './logout/logout.component';
import { CanRegisterGuard } from '../jam/guards/can-register-guard';

const routes: Routes = [
  { path: '', component: EditProfileComponent ,canActivate: [CanRegisterGuard],},
  { path: 'zoroastrianCard', component: GetZoroastrianCardComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
