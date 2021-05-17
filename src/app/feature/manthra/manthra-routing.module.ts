import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyiineNameComponent } from './ayiine-name/ayiine-name.component';
import { AzadComponent } from './azad/azad.component';
import { CheckGataHaAgeRangeGuard } from './guards/check-gata-ha-age-range.guard';
import { HaveNotRegesterdGuard } from './guards/have-not-regesterd.guard';
import { ManthraFillDataGuard } from './guards/manthra-fill-data.guard';
import { ProjectBasedComponent } from './project-based/project-based.component';
import { SelectSectionComponent } from './select-section/select-section.component';

const routes: Routes = [
  {
    path: '', canActivate: [ManthraFillDataGuard, HaveNotRegesterdGuard, CheckGataHaAgeRangeGuard], children: [
      { path: '', component: AyiineNameComponent },
      {
        path: 'section', children: [
          { path: 'azad', component: AzadComponent },
          { path: 'project-based', component: ProjectBasedComponent },
        ]
      },
      { path: 'select-section', component: SelectSectionComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManthraRoutingModule { }
