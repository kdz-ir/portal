import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedProfileModule } from 'src/app/shared/modules/shared-profile/shared-profile.module';
import { ProfileCheckInputComponent } from './components/profile-check-input/profile-check-input.component';



@NgModule({
  declarations: [
    ProfileCheckInputComponent
  ],
  imports: [
    SharedModule,
    SharedProfileModule
  ],
  exports: [
    SharedModule,
    SharedProfileModule,
    ProfileCheckInputComponent
  ]
})
export class JamSharedModule { }
