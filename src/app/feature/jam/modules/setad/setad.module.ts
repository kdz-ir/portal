import { NgModule } from '@angular/core';

import { SetadRoutingModule } from './setad-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { SingleListPageComponent } from './pages/single/single-list-page/single-list-page.component';
import { SinglePlayerDitailPageComponent } from './pages/single/single-player-ditail-page/single-player-ditail-page.component';
import { AllPlayerPageComponent } from './pages/tools/all-player-page/all-player-page.component';
import { DoubleListPageComponent } from './pages/double/double-list-page/double-list-page.component';
import { DoubleTeamDetailPageComponent } from './pages/double/double-team-detail-page/double-team-detail-page.component';
import { TeamListPageComponent } from './pages/teams/team-list-page/team-list-page.component';
import { TeamDetailPageComponent } from './pages/teams/team-detail-page/team-detail-page.component';
import { DormitoryListPageComponent } from './pages/dormitory/dormitory-list-page/dormitory-list-page.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ShenavarPlayersPageComponent } from './pages/tools/shenavar-players-page/shenavar-players-page.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { CardsListPageComponent } from './pages/tools/cards-list-page/cards-list-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SingleListPageComponent,
    SinglePlayerDitailPageComponent,
    AllPlayerPageComponent,
    DoubleListPageComponent,
    DoubleTeamDetailPageComponent,
    TeamListPageComponent,
    TeamDetailPageComponent,
    DormitoryListPageComponent,
    ShenavarPlayersPageComponent,
    ImageViewerComponent,
    CardsListPageComponent
  ],
  imports: [
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatBadgeModule,MatButtonToggleModule,
    SetadRoutingModule
  ]
})
export class StetadModule { }
