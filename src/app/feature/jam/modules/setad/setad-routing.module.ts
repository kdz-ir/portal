import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SingleListPageComponent } from './pages/single/single-list-page/single-list-page.component';
import { SinglePlayerDitailPageComponent } from './pages/single/single-player-ditail-page/single-player-ditail-page.component';
import { SinglePlayerResolver } from './resolvers/single-player-resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
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

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetadRoutingModule { }
