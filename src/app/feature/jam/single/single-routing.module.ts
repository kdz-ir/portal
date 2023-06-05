import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportInsuranceGuard } from './guards/sport-insurance.guard';
import { SingleHomePageComponent } from './pages/single-home-page/single-home-page.component';
import { SportInsurencePageComponent } from './pages/sport-in-surence-page/sport-insurence-page.component';
import { sportInsuranceResolver } from './resolvers/sport-insurance-status-reslover';

const routes: Routes = [{
  path: '',
  canActivate: [SportInsuranceGuard],
  component: SingleHomePageComponent
},
{
  path: 'sport-insurence',
  component: SportInsurencePageComponent,
  resolve: { sportInsurance: sportInsuranceResolver }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
