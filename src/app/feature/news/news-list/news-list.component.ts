import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NewsRepositoryService } from '../services/news-repository.service';
import { NewsList } from '../model/news-list';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements AfterViewInit {
  newsList:NewsList;
  ngAfterViewInit(): void {
   this._newsRepository.getNewsList().subscribe(c=>{
    this.newsList=c;
    console.log(c.posts)
   })
  }
  
constructor(private readonly _newsRepository:NewsRepositoryService) {}


}
