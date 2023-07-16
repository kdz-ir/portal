import { NgModule } from '@angular/core';

import { SetadRoutingModule } from './setad-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { SingleListPageComponent } from './pages/single/single-list-page/single-list-page.component';
import { SinglePlayerDitailPageComponent } from './pages/single/single-player-ditail-page/single-player-ditail-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SingleListPageComponent,
    SinglePlayerDitailPageComponent
  ],
  imports: [
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    SetadRoutingModule
  ]
})
export class StetadModule { }
