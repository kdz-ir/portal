import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { CanRegisterGuard } from '../../guards/can-register-guard';
import { PreRegisterHomePageComponent } from './components/pre-register-home-page/pre-register-home-page.component';
import { SetadReportComponent } from './components/setad-report/setad-report.component';
import { adminAccessGuard } from 'src/app/shared/guards/admin-access-guard';

const routes: Routes = [
  {
    path: '',
    component: PreRegisterHomePageComponent,
  },
  {
    path: ':id',
    component: RegulationsComponent,
    canActivate: [CanRegisterGuard],//SportInsuranceGuard بعدا دوباره اضافه بشه
  },

  {
    path: 'setad/report',
    canActivate: [adminAccessGuard],
    component: SetadReportComponent,
     },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerRegisterRoutingModule { }
