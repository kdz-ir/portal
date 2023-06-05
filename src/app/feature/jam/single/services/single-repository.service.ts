import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CheckSportInsuranceStatus, EntitySportInsurance, SportInsurance } from '../models/CheckSportInsuranceStatus';

@Injectable({
  providedIn: 'root'
})
export class SingleRepositoryService {
  private readonly _url = environment.url + "/api/v1/account/jam/single";
  constructor (private readonly _http: HttpClient) { }
  public get SportInsurenceStatus() {
    return this._http.get<CheckSportInsuranceStatus>(this._url + '/sport-insurance-status').pipe(map(c => c.status));
  }
  setSportInsurance(data: { sportInsurance: string; }) {
    return this._http.post(this._url + '/sport-insurance', data);
  }
  public get sportInsurance() {
    return this._http.get<SportInsurance>(this._url + '/sport-insurance');
  }
}

