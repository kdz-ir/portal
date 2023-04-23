import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdooRoutingModule } from './ordoo-routing.module';
import { OrdooHomePageComponent } from './pages/ordoo-home-page/ordoo-home-page.component';


@NgModule({
  declarations: [
    OrdooHomePageComponent
  ],
  imports: [
    CommonModule,
    OrdooRoutingModule
  ]
})
export class OrdooModule { }
