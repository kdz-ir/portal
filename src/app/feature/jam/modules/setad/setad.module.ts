import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetadRoutingModule } from './setad-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    MatTableModule,
    MatSortModule,
    SetadRoutingModule
  ]
})
export class StetadModule { }
