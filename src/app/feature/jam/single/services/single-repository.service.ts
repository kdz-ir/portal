import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CheckSportInsuranceStatus } from '../models/CheckSportInsuranceStatus';

@Injectable({
  providedIn: 'root'
})
export class SingleRepositoryService {
  private readonly _url = environment.url + "/api/v1/account/jam/single/sport-insurance-status";
  constructor (private readonly _http: HttpClient) { }
  public get SportInsurenceStatus() {
    return this._http.get<CheckSportInsuranceStatus>(this._url).pipe(map(c => c.status));
  }
}

