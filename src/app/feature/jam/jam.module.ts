import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JamRoutingModule } from './jam-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { JamHomePageComponent } from './jam-home-page/jam-home-page.component';


@NgModule({
  declarations: [
    JamHomePageComponent
  ],
  imports: [
    SharedModule,
    JamRoutingModule
  ]
})
export class JamModule { }
