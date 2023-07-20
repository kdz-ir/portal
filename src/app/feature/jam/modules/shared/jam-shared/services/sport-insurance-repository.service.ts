import { Injectable } from '@angular/core';
import { ISportInsurance } from '../models/isport-insurance';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportInsuranceRepositoryService {
  private readonly _url = environment.url + "/api/v1/account/jam/sport-insurance";
  constructor (private readonly _http: HttpClient) { }
  public get sportInsurance() {
    return this._http.get<ISportInsurance>(this._url);
  }
  check(nationalCode: string) {
    return this._http.get<ISportInsurance>(this._url + `/${nationalCode}`);
  }
}
