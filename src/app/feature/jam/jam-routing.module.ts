import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JamHomePageComponent } from './pages/jam-home-page/jam-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: JamHomePageComponent
  },
  {
    path: 'single',
    loadChildren: () => import('./modules/single/single.module').then(c => c.SingleModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./modules/team/team.module').then(c => c.TeamModule)
  },
  {
    path: 'dormitory',
    loadChildren: () => import('./modules/dormitory/dormitory.module').then(c => c.DormitoryModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JamRoutingModule { }
