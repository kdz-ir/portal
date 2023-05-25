import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportInsuranceGuard } from './guards/sport-insurance.guard';

const routes: Routes = [{
  path: '',
  canActivate: [SportInsuranceGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
