import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdooHomePageComponent } from './pages/ordoo-home-page/ordoo-home-page.component';

const routes: Routes = [{
  path: '',
  component: OrdooHomePageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdooRoutingModule { }
