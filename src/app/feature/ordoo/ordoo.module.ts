import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdooRoutingModule } from './ordoo-routing.module';
import { OrdooHomePageComponent } from './pages/ordoo-home-page/ordoo-home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdooRegisterPageComponent } from './pages/ordoo-register-page/ordoo-register-page.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    OrdooHomePageComponent,
    OrdooRegisterPageComponent
  ],
  imports: [
    SharedModule,
    OrdooRoutingModule,
    MatExpansionModule
  ]
})
export class OrdooModule { }
