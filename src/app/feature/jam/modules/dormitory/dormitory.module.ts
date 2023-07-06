import { NgModule } from '@angular/core';

import { DormitoryRoutingModule } from './dormitory-routing.module';
import { JamSharedModule } from '../shared/jam-shared/jam-shared.module';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    JamSharedModule,
    DormitoryRoutingModule,
    MatCardModule,
  ]
})
export class DormitoryModule { }
