import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SportInsurance } from '../models/CheckSportInsuranceStatus';
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';
import { ProfileField, ProgramType } from 'src/app/core/model/age-type-enum';

@Injectable({
  providedIn: 'root'
})
export class SingleRepositoryService extends CoreProfileService {
  private readonly _url = environment.url + "/api/v1/account/jam/single";
  constructor (http: HttpClient) {
    super(http);
  }
  public get SportInsurenceStatus() {
    return this.checkFieldStatus(ProfileField.SportInsurance, ProgramType.jam).pipe(map(c => c.status));
  }
  setSportInsurance(data: { sportInsurance: string; }) {
    return this.http.post(this._url + '/sport-insurance', data);
  }
  public get sportInsurance() {
    return this.http.get<SportInsurance>(this._url + '/sport-insurance');
  }
}

