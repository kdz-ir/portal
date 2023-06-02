import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UnAuthenticationGuard } from './guards/un-authentication.guard';
import { ValidProfileGuard } from './guards/valid-profile.guard';
import { PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: '', canActivate: [AuthenticationGuard], children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('../feature/home/home.module').then(h => h.HomeModule)
      },
      {
        path: 'Settings',
        loadChildren: () => import('../feature/setting/setting.module').then(s => s.SettingModule)
      },
      {
        path: 'jam',
        loadChildren: () => import('../feature/jam/jam.module').then(c => c.JamModule)
      },
      {
        path: 'Manthra',
        canActivate: [ValidProfileGuard],
        loadChildren: () => import('../feature/manthra/manthra.module').then(s => s.ManthraModule)
      },
      {
        path: 'ordoo',
        canActivate: [ValidProfileGuard],
        loadChildren: () => import('../feature/ordoo/ordoo.module').then(s => s.OrdooModule)
      }
    ]
  },
  {
    path: 'Authentication',
    loadChildren: () => import('../feature/authentication/authentication.module').then(a => a.AuthenticationModule),
    canActivate: [UnAuthenticationGuard]
  },
  {
    path: 'news',
    loadChildren: () => import('../feature/news/news.module').then(c => c.NewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
