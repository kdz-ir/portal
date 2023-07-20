import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsListPageComponent } from './pages/programs-list-page/programs-list-page.component';

const routes: Routes = [{
  path: '',
  component: ProgramsListPageComponent
},
{ path: 'startup-weekend', loadChildren: () => import('./modules/startup-weekend/startup-weekend.module').then(c => c.StartupWeekendModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
