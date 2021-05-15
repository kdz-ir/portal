import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManthraRoutingModule } from './manthra-routing.module';
import { AyiineNameComponent } from './ayiine-name/ayiine-name.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectSectionComponent } from './select-section/select-section.component';
import { AzadComponent } from './azad/azad.component';
import { ProjectBasedComponent } from './project-based/project-based.component';


@NgModule({
  declarations: [AyiineNameComponent, SelectSectionComponent, AzadComponent, ProjectBasedComponent],
  imports: [
    CommonModule,
    ManthraRoutingModule,
    SharedModule
  ]
})
export class ManthraModule { }
