import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManthraRoutingModule } from './manthra-routing.module';
import { AyiineNameComponent } from './ayiine-name/ayiine-name.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Up18SelectComponent } from './up18-select/up18-select.component';


@NgModule({
  declarations: [AyiineNameComponent, Up18SelectComponent],
  imports: [
    CommonModule,
    ManthraRoutingModule,
    SharedModule
  ]
})
export class ManthraModule { }
