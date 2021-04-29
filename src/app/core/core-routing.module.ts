import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UnAuthenticationGuard } from './guards/un-authentication.guard';

const routes: Routes = [
  {
    path: '', canActivate: [AuthenticationGuard], children: [
      {
        path: 'Settings',
        loadChildren: () => import('../feature/setting/setting.module').then(s => s.SettingModule)
      }
    ]
  },
  {
    path: 'Authentication',
    loadChildren: () => import('../feature/authentication/authentication.module').then(a => a.AuthenticationModule),
    canActivate: [UnAuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
