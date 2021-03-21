import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnAuthenticationGuard } from './guards/un-authentication.guard';

const routes: Routes = [{
  path: 'Authentication',
  loadChildren: () => import('../feature/authentication/authentication.module').then(a => a.AuthenticationModule),
  canActivate: [UnAuthenticationGuard]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
