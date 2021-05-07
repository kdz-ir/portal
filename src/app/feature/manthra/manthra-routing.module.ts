import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyiineNameComponent } from './ayiine-name/ayiine-name.component';
import { ManthraFillDataGuard } from './guards/manthra-fill-data.guard';

const routes: Routes = [
  { path: '', component: AyiineNameComponent,canActivate:[ManthraFillDataGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManthraRoutingModule { }
