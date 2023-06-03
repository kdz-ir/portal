import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportInsuranceGuard } from './guards/sport-insurance.guard';
import { SingleHomePageComponent } from './pages/single-home-page/single-home-page.component';
import { SingleRepositoryService } from './services/single-repository.service';
import { SportInsurencePageComponent } from './pages/sport-in-surence-page/sport-insurence-page.component';

const routes: Routes = [{
  path: '',
  canActivate: [SportInsuranceGuard],
  component: SingleHomePageComponent
},
{
  path: 'sport-insurence',
  component: SportInsurencePageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
