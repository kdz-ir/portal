import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsList } from './news-list';

@Injectable({
  providedIn: 'root'
})
export class NewsRepositoryService {

  constructor(private readonly _http: HttpClient) { }
 getNewsList() {
    return this._http.get<NewsList>('https://kdz.ir/fa/?json=get_posts&');
  }
}
