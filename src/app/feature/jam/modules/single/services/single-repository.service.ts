import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IIndividual, SportInsurance } from '../models/CheckSportInsuranceStatus';
import { SingleRegisteredStatus } from "../models/SingleRegisteredStatus";
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';
import { ProfileField } from "src/app/core/model/ProfileField";
import { ProgramType } from "src/app/core/model/ProgramType";
import { SportField } from '../../../models/sport-field';
import { SportSubField } from '../../../models/sub-sport-field';

@Injectable({
  providedIn: 'root'
})
export class SingleRepositoryService extends CoreProfileService {
  private readonly _url = environment.url + "/api/v1/account/jam/single";
  constructor () {
    super();
  }
  public get sportInsurance() {
    return this.http.get<SportInsurance>(this._url + '/sport-insurance');
  }
  register(field: SportField, subField: SportSubField) {
    return this.http.post(this._url + '/register', { field, subField });
  }
  getRegisteredStatus(field: SportField, subField: SportSubField) {
    return this.http.post<SingleRegisteredStatus>(this._url + '/status', { field, subField });
  }
  delete(field: SportField, subField: SportSubField) {
    return this.http.post(this._url + '/delete', { field, subField });
  }
}

