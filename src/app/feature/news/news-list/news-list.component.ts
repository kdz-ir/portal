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
export class NewsListComponent implements AfterViewInit {
  newsList: NewsList;
  isWebShareSupported: boolean;

  constructor(private readonly _newsRepository: NewsRepositoryService) {}

  ngAfterViewInit(): void {
    this._newsRepository.getNewsList().subscribe(c => {
      this.newsList = c;
      console.log(c.posts);
      this.checkWebShareSupport();
    });
  }

  checkWebShareSupport() {
    this.isWebShareSupported = navigator && navigator.share ? true : false;
  }

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
