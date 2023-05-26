import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NewsListComponent
  ],
  imports: [
    SharedModule,
    NewsRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class NewsModule { }
