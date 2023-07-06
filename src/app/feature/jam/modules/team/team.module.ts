import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { CreateTeamPageComponent } from './pages/create-team-page/create-team-page.component';
import { ShowTeamPageComponent } from './pages/show-team-page/show-team-page.component';
import { JamSharedModule } from '../shared/jam-shared/jam-shared.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    IndexPageComponent,
    CreateTeamPageComponent,
    ShowTeamPageComponent
  ],
  imports: [
    JamSharedModule,
    TeamRoutingModule,
    MatCardModule,
  ]
})
export class TeamModule { }
