import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedProfileModule } from 'src/app/shared/modules/shared-profile/shared-profile.module';
import { ProfileCheckInputComponent } from './components/profile-check-input/profile-check-input.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ProfileCheckInputComponent
  ],
  imports: [
    SharedModule,
    SharedProfileModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [
    SharedModule,
    SharedProfileModule,
    ProfileCheckInputComponent,
    MatTableModule,
    MatCardModule,
  ]
})
export class JamSharedModule { }
