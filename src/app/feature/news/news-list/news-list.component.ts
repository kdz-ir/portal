import { Component } from '@angular/core';
import { NewsRepositoryService } from '../services/news-repository.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {

  readonly isWebShareSupported: boolean = navigator && navigator.share ? true : false;
  newsList = this._newsRepository.getNewsList;
  constructor(private readonly _newsRepository: NewsRepositoryService) { }

  share(title: string, url: string) {
    navigator.share({
      title: title,
      text: `برای خواندن خبر '${title}' برای خواندن ادامه مطلب روی لینک بزن!`,
      url: url
    })
      .catch((error) => console.log('Error sharing:', error));
  }

  calculateRelativeTime(date: string): string {
    const parsedDate = new Date(date);
    const now = new Date();

    const seconds = Math.floor((now.getTime() - parsedDate.getTime()) / 1000);
    if (seconds < 60) {
      return `${seconds} ثانیه`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} دقیقه`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} ساعت`;
    }

    const days = Math.floor(hours / 24);
    if (days < 30) {
      return `${days} روز`;
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
      return `${months} ماه`;
    }

    const years = Math.floor(months / 12);
    return `${years} سال`;
  }
}

