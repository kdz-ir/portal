import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsListPageComponent } from './pages/programs-list-page/programs-list-page.component';

const routes: Routes = [{
  path: '',
  component: ProgramsListPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
