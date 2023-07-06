import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JamRoutingModule } from './jam-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { JamHomePageComponent } from './pages/jam-home-page/jam-home-page.component';
import { RegisterHomePageComponent } from './pages/register-home-page/register-home-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CountdownModule } from 'ngx-countdown';


@NgModule({
  declarations: [
    JamHomePageComponent,
    RegisterHomePageComponent,
    HistoryPageComponent,
    CountdownComponent
  ],
  imports: [
    SharedModule,
    CountdownModule,
    JamRoutingModule
  ]
})
export class JamModule { }
