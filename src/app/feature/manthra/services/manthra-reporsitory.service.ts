import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { checkZoastrianCardInfo } from '../models/check-zoastrian-card-info';

@Injectable({
  providedIn: 'root'
})
export class ManthraReporsitoryService {
  private readonly _url = environment.url + '/api/v1/account/manthra';
  constructor (private readonly _http: HttpClient) { }
  getUserStatus() {
    return this._http.get<checkZoastrianCardInfo>(this._url + '/state').pipe(map(c =>  c.status));
  }
}
