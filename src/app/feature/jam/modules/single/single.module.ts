import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { SingleRoutingModule } from './single-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SingleHomePageComponent } from './pages/single-home-page/single-home-page.component';
import { SportInsurencePageComponent } from './pages/sport-in-surence-page/sport-insurence-page.component';
import { SingleRegisterPageComponent } from './pages/single-register-page/single-register-page.component';
import { DoubleRegisterPageComponent } from './pages/double-register-page/double-register-page.component';
import { SharedProfileModule } from 'src/app/shared/modules/shared-profile/shared-profile.module';
import { JamSharedModule } from '../shared/jam-shared/jam-shared.module';
@NgModule({
  declarations: [
    SingleHomePageComponent,
    SportInsurencePageComponent,
    SingleRegisterPageComponent,
    DoubleRegisterPageComponent
  ],
  imports: [
    JamSharedModule,
    SingleRoutingModule,
    MatExpansionModule,
    
  ]
})
export class SingleModule { }
