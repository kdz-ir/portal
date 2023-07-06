import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallBackPageComponent } from './pages/call-back-page/call-back-page.component';

const routes: Routes = [
  {
    path: 'call-back',
    component: CallBackPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
