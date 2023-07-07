import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsListPageComponent } from './pages/programs-list-page/programs-list-page.component';


@NgModule({
  declarations: [
    ProgramsListPageComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
