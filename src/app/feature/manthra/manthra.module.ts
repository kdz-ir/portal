import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManthraRoutingModule } from './manthra-routing.module';
import { AyiineNameComponent } from './gata-ha/ayiine-name/ayiine-name.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectSectionComponent } from './gata-ha/select-section/select-section.component';
import { AzadComponent } from './gata-ha/azad/azad.component';
import { ProjectBasedComponent } from './gata-ha/project-based/project-based.component';
import { ManthtaHomeComponent } from './manthta-home/manthta-home.component';
import { PersonalInformationComponent } from './mantrak/personal-information/personal-information.component';


@NgModule({
  declarations: [AyiineNameComponent, SelectSectionComponent, AzadComponent, ProjectBasedComponent, ManthtaHomeComponent, PersonalInformationComponent],
  imports: [
    CommonModule,
    ManthraRoutingModule,
    SharedModule
  ]
})
export class ManthraModule { }
