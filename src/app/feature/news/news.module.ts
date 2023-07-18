import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import { PipePipe } from './pipes/pipe.pipe'; 

@NgModule({
  declarations: [
    NewsListComponent,
    PipePipe
  ],
  imports: [
    SharedModule,
    NewsRoutingModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class NewsModule { }
