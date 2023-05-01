import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IsLiveInTehran } from '../models/is-live-in-tehran';

@Injectable({
  providedIn: 'root'
})
export class OrdooService {
  private readonly _url = environment.url + '/api/v1/account/ordoo';
  constructor (private readonly _http: HttpClient) { }
  get isLiveInTehran() {
    return this._http.get<IsLiveInTehran>(this._url + '/isLiveInTehran');
  }
}
