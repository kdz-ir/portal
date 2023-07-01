import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { CreateTeamPageComponent } from './pages/create-team-page/create-team-page.component';
import { TeamResolver, TeamsResolver } from './resolvers/teams-resolver';
import { ShowTeamPageComponent } from './pages/show-team-page/show-team-page.component';

const routes: Routes = [{
  path: '',
  component: IndexPageComponent,
  resolve: {
    teams: TeamsResolver
  }
},
{
  path: 'create',
  component: CreateTeamPageComponent
},
{
  path: ':id', component: ShowTeamPageComponent, resolve: {
    team: TeamResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
