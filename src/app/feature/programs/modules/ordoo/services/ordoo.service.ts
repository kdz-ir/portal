import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IsLiveInTehran } from '../models/is-live-in-tehran';
import { IOrdooData } from '../pages/ordoo-register-page/IOrdooData';

@Injectable({
  providedIn: 'root'
})
export class OrdooService {
  private readonly _url = environment.url + '/api/v1/account/ordoo';
  constructor (private readonly _http: HttpClient) { }
  get isLiveInTehran() {
    return this._http.get<IsLiveInTehran>(this._url + '/isLiveInTehran');
  }
  registerOrdoo(data: IOrdooData) {
    return this._http.post(this._url + '/register', data);
  }
  getReport() {
    return this._http.get(this._url + '/report', { responseType: 'blob' });
  }
}
