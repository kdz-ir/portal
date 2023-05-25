import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JamRoutingModule } from './jam-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    JamRoutingModule
  ]
})
export class JamModule { }
