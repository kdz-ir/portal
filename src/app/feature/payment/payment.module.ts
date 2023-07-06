import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CallBackPageComponent } from './pages/call-back-page/call-back-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CallBackPageComponent
  ],
  imports: [
    SharedModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
