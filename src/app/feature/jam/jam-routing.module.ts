import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JamHomePageComponent } from './pages/jam-home-page/jam-home-page.component';
import { ValidProfileGuard } from 'src/app/core/guards/valid-profile.guard';
import { RegisterHomePageComponent } from './pages/register-home-page/register-home-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { adminAccessGuard } from 'src/app/shared/guards/admin-access-guard';
import { CanLoadThisProgramGuard } from 'src/app/core/guards/can-load-this-program.guard';

const routes: Routes = [
  {
    path: '',
    component: JamHomePageComponent
  },
  {
    path: 'register',
    component: RegisterHomePageComponent,
  },
  {
    path: 'history',
    component: HistoryPageComponent
  },
  {
    path: 'pre-registerion',
    loadChildren: () => import('./modules/per-register/per-register.module').then(c => c.PerRegisterModule)
  },
  {
    path: 'register',
    canActivate: [ValidProfileGuard],
    children: [
      {
        path: 'single',
        loadChildren: () => import('./modules/single/single.module').then(c => c.SingleModule),
        canActivate:[CanLoadThisProgramGuard(false)]
      },
      {
        path: 'team',
        loadChildren: () => import('./modules/team/team.module').then(c => c.TeamModule)
      },
      {
        path: 'dormitory',
        loadChildren: () => import('./modules/dormitory/dormitory.module').then(c => c.DormitoryModule)
      }
    ]
  },
  {
    path: 'setad',
    canActivate: [adminAccessGuard],
    loadChildren: () => import('./modules/setad/setad.module').then(c => c.StetadModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JamRoutingModule { }
