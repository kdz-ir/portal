import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import { RelativeDatePipe } from './pipes/relative-date.pipe'; 

@NgModule({
  declarations: [
    NewsListComponent,
    RelativeDatePipe
  ],
  imports: [
    SharedModule,
    NewsRoutingModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class NewsModule { }
