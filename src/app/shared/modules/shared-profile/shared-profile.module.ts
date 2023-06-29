import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from 'src/app/shared/adapter/material.persian-date.adapter';
import { SetMinimumProfileDialogComponent } from './components/set-minimum-profile-dialog/set-minimum-profile-dialog.component';
import { SharedModule } from '../../shared.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [SetMinimumProfileDialogComponent],
  imports: [
    SharedModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ],
  exports: [SetMinimumProfileDialogComponent]
})
export class SharedProfileModule { }
