import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdooHomePageComponent } from './pages/ordoo-home-page/ordoo-home-page.component';
import { OrdooRegisterPageComponent } from './pages/ordoo-register-page/ordoo-register-page.component';
import { OrdooAdminPageComponent } from './pages/ordoo-admin-page/ordoo-admin-page.component';
import { OrdooAyinNamePageComponent } from './pages/ordoo-ayin-name-page/ordoo-ayin-name-page.component';
import { OrdooAdminGuard } from './guards/ordoo-admin.guard';

const routes: Routes = [{
  path: '',
  component: OrdooHomePageComponent
}, {
  path: 'register',
  component: OrdooRegisterPageComponent
}, {
  path: 'admin',
  component: OrdooAdminPageComponent,
  canActivate: [OrdooAdminGuard]
}, {
  path: 'ayin-name',
  component: OrdooAyinNamePageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdooRoutingModule { }
