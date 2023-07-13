import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupWeekendRoutingModule } from './startup-weekend-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    StartupWeekendRoutingModule
  ]
})
export class StartupWeekendModule { }
