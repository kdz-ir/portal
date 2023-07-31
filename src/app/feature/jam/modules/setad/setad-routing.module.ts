import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SingleListPageComponent } from './pages/single/single-list-page/single-list-page.component';
import { SinglePlayerDitailPageComponent } from './pages/single/single-player-ditail-page/single-player-ditail-page.component';
import { SinglePlayerResolver } from './resolvers/single-player-resolver';
import { AllPlayerPageComponent } from './pages/tools/all-player-page/all-player-page.component';
import { DoubleListPageComponent } from './pages/double/double-list-page/double-list-page.component';
import { DoubleTeamDetailPageComponent } from './pages/double/double-team-detail-page/double-team-detail-page.component';
import { doubleTeamResolver } from './resolvers/double-team-resolver';
import { TeamListPageComponent } from './pages/teams/team-list-page/team-list-page.component';
import { TeamDetailPageComponent } from './pages/teams/team-detail-page/team-detail-page.component';
import { teamResolver } from './resolvers/team-resolver';
import { DormitoryListPageComponent } from './pages/dormitory/dormitory-list-page/dormitory-list-page.component';
import { ShenavarPlayersPageComponent } from './pages/tools/shenavar-players-page/shenavar-players-page.component';
import { CardsListPageComponent } from './pages/tools/cards-list-page/cards-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'team/:field/:subField',
        component: TeamListPageComponent
      },
      {
        path: 'team/:field/:subField/:id',
        component: TeamDetailPageComponent,
        resolve: {
          team: teamResolver
        }
      },
      {
        path: 'double/:field/:subField',
        component: DoubleListPageComponent,
      },
      {
        path: 'double/:field/:subField/:id',
        component: DoubleTeamDetailPageComponent,
        resolve: {
          team: doubleTeamResolver
        }
      },
      {
        path: 'single/:field/:subField',
        component: SingleListPageComponent,
      },
      {
        path: 'single/:field/:subField/:id',
        component: SinglePlayerDitailPageComponent,
        resolve: {
          player: SinglePlayerResolver
        }
      },
      {
        path: 'dormitory',
        component: DormitoryListPageComponent
      },
      {
        path: 'tools',
        children: [
          {
            path: 'shenavar',
            component: ShenavarPlayersPageComponent
          },
          {
            path: 'all',
            component: AllPlayerPageComponent
          },
          {
            path: 'cards',
            component: CardsListPageComponent
          }
        ],
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetadRoutingModule { }
