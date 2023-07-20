import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyiineNameComponent } from './gata-ha/ayiine-name/ayiine-name.component';
import { AzadComponent } from './gata-ha/azad/azad.component';
import { CheckGataHaAgeRangeGuard } from './guards/check-gata-ha-age-range.guard';
import { HaveNotRegesterdGuard } from './guards/have-not-regesterd.guard';
import { ManthraFillDataGuard } from './guards/manthra-fill-data.guard';
import { ManthtaHomeComponent } from './manthta-home/manthta-home.component';
import { ProjectBasedComponent } from './gata-ha/project-based/project-based.component';
import { SelectSectionComponent } from './gata-ha/select-section/select-section.component';
import { PersonalInformationComponent } from './mantrak/personal-information/personal-information.component';
import { UpThirteenComponent } from './avesta-khani/up-thirteen/up-thirteen.component';
import { UnderteenComponent } from './avesta-khani/underteen/underteen.component';
import { MantrkParticipatAvestaKhaniComponent } from './mantrak/mantrk-participat-avesta-khani/mantrk-participat-avesta-khani.component';
import { ManthrakAyinNameComponent } from './mantrak/manthrak-ayin-name/manthrak-ayin-name.component';
import { AvastaKhaniAyinNameComponent } from './avesta-khani/avasta-khani-ayin-name/avasta-khani-ayin-name.component';

const routes: Routes = [
  {
    path: '', canActivate: [ManthraFillDataGuard], children: [
      { path: '', component: ManthtaHomeComponent },
      {
        path: 'avesta-khani',
        children: [
          {
            path:'',
            component:AvastaKhaniAyinNameComponent
          },
          {
            path: 'up13',
            component: UpThirteenComponent
          },
          {
            path: 'under10',
            component: UnderteenComponent
          }
        ]
      },
      {
        path: 'mantrak', children: [
          {
            path: '',
            component: ManthrakAyinNameComponent
          },
          {
            path: 'personal-information',
            component: PersonalInformationComponent
          },
          {
            path: 'mantrk-participat-avesta-khani',
            component: MantrkParticipatAvestaKhaniComponent
          }
        ]
      },
      {
        path: 'gata-ha',
        canActivate: [CheckGataHaAgeRangeGuard],
        children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManthraRoutingModule { }
