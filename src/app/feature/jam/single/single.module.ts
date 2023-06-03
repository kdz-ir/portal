import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SingleHomePageComponent } from './pages/single-home-page/single-home-page.component';
import { SportInsurencePageComponent } from './pages/sport-in-surence-page/sport-insurence-page.component';


@NgModule({
  declarations: [
    SingleHomePageComponent,
    SportInsurencePageComponent
  ],
  imports: [
    SharedModule,
    SingleRoutingModule
  ]
})
export class SingleModule { }
