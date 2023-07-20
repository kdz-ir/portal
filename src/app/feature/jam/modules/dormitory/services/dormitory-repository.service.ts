import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDorm } from '../models/idorm';
import { IDormsRegister } from '../models/idorms-register';

@Injectable({
  providedIn: 'root'
})
export class DormitoryRepositoryService {
  private readonly _url = environment.url + '/api/v1/account/jam/dormitory';
  constructor (private readonly _http: HttpClient) { }
  get dorms() {
    return this._http.get<IDorm[]>(this._url);
  }
  register(data: IDormsRegister) {
    return this._http.post<{ action: string; }>(this._url, data);
  }
}
