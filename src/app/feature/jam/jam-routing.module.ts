import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
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
