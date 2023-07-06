import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from '../../shared/adapter/material.persian-date.adapter';
import { LogoutComponent } from './logout/logout.component';
import { GetZoroastrianCardComponent } from './get-zoroastrian-card/get-zoroastrian-card.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [EditProfileComponent, LogoutComponent, GetZoroastrianCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  providers:[
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ]
})
export class SettingModule { }
