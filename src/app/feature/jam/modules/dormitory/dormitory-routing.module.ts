import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { DormsResolver } from './resolvers/DormsResolver';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent,
    resolve: {
      dorms: DormsResolver
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DormitoryRoutingModule { }
