import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerRegisterRoutingModule } from './per-register-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { PreRegisterHomePageComponent } from './components/pre-register-home-page/pre-register-home-page.component';


@NgModule({
  declarations: [RegulationsComponent,PreRegisterHomePageComponent],
  imports: [
    SharedModule,
    PerRegisterRoutingModule
  ]
})
export class PerRegisterModule { }
