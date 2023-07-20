import { Injectable } from '@angular/core';
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';
import { environment } from 'src/environments/environment';
import { IIndividual } from "../models/IIndividual";
import { SportField } from '../../../models/sport-field';
import { SportSubField } from '../../../models/sub-sport-field';

@Injectable({
  providedIn: 'root'
})
export class DoubleRepositoryService extends CoreProfileService {
  private readonly _url = environment.url + '/api/v1/account/jam/double';
  constructor () {
    super();
  }
  register(field: SportField, subField: SportSubField, individuals: string[]) {
    return this.http.post(this._url, { field, subField, individuals });
  }
  individuals(field: SportField, subField: SportSubField) {
    return this.http.post<IIndividual>(this._url + '/individuals', { field, subField });
  }
  delete(field: SportField, subField: SportSubField) {
    return this.http.post(this._url + '/delete', { field, subField });
  }
}
