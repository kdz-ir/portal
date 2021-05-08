import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyiineNameComponent } from './ayiine-name/ayiine-name.component';
import { ManthraFillDataGuard } from './guards/manthra-fill-data.guard';
import { SelectSectionComponent } from './select-section/select-section.component';

const routes: Routes = [
  {
    path: '', canActivate: [ManthraFillDataGuard], children: [
      { path: '', component: AyiineNameComponent },
      { path: 'select-section', component: SelectSectionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManthraRoutingModule { }
