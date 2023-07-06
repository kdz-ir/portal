import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsList } from '../model/news-list';

@Injectable({
  providedIn: 'root'
})
export class NewsRepositoryService {

  constructor(private readonly _http: HttpClient) { }
 get getNewsList() {
    return this._http.get<NewsList>("https://kdz.ir/fa/?json=get_posts");
  }
}
