import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NewsRepositoryService } from '../services/news-repository.service';
import { NewsList } from '../model/news-list';
import { DomSanitizer } from '@angular/platform-browser';
declare const navigator: Navigator;

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  newsList: NewsList;
  readonly isWebShareSupported: boolean=navigator && navigator.share ? true : false;
newsList2=this._newsRepository.getNewsList;
  constructor(private readonly _newsRepository: NewsRepositoryService) {}


  

  share(title: string, url: string) {
    if (navigator && navigator.share) {
      navigator.share({
        title: title,
        url: url,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      console.log('Web Share API not supported');
    }
  }
}
