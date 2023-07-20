import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UnAuthenticationGuard } from './guards/un-authentication.guard';
import { ValidProfileGuard } from './guards/valid-profile.guard';
import { PreloadAllModules } from '@angular/router';
import { CanLoadThisProgramGuard } from './guards/can-load-this-program.guard';
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
        path: 'programs',
        loadChildren: () => import('../feature/programs/programs.module').then(h => h.ProgramsModule)
      },
      {
        path: 'Settings',
        loadChildren: () => import('../feature/setting/setting.module').then(s => s.SettingModule)
      },
      {
        path: 'jam',
        canActivate: [CanLoadThisProgramGuard(true)],
        loadChildren: () => import('../feature/jam/jam.module').then(c => c.JamModule)
      },
      {
        path: '',
        canActivate: [ValidProfileGuard],
        children: [
          {
            path: 'Manthra',
            canActivate: [CanLoadThisProgramGuard(false)],
            loadChildren: () => import('../feature/programs/modules/manthra/manthra.module').then(s => s.ManthraModule)
          },
          {
            path: 'ordoo',
            canActivate: [CanLoadThisProgramGuard(false)],
            loadChildren: () => import('../feature/programs/modules/ordoo/ordoo.module').then(s => s.OrdooModule)
          }]
      }
    ]
  },
  {
    path: 'Authentication',
    loadChildren: () => import('../feature/authentication/authentication.module').then(a => a.AuthenticationModule),
    canActivate: [UnAuthenticationGuard]
  },
  {
    path: "payment",
    loadChildren: () => import('../feature/payment/payment.module').then(c => c.PaymentModule)
  },
  {
    path: 'news',
    loadChildren: () => import('../feature/news/news.module').then(c => c.NewsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
