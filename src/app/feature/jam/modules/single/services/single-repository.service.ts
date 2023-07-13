import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SingleRegisteredStatus } from "../models/SingleRegisteredStatus";
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';
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

