import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JamHomePageComponent } from './jam-home-page/jam-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: JamHomePageComponent
  },
  {
    path: 'single',
    loadChildren: () => import('./single/single.module').then(c => c.SingleModule)
  }, {
    path: 'team',
    loadChildren: () => import('./team/team.module').then(c => c.TeamModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JamRoutingModule { }
