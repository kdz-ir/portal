import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SingleListPageComponent } from './pages/single/single-list-page/single-list-page.component';
import { SinglePlayerDitailPageComponent } from './pages/single/single-player-ditail-page/single-player-ditail-page.component';
import { SinglePlayerResolver } from './resolvers/single-player-resolver';
import { AllPlayerPageComponent } from './pages/all-player-page/all-player-page.component';
import { DoubleListPageComponent } from './pages/double/double-list-page/double-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'all',
    component: AllPlayerPageComponent
  },
  {
    path: 'double/:field/:subField',
    component: DoubleListPageComponent,
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
