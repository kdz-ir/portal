import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { gataHaRegisterFilledInfo } from '../../model/gata-ha-register-filled';
import { CheckFieldStatus, IGetProfileRoot, ProfileStatusInfo } from '../../model/profile-status-info';
import { ProfileField, ProgramType } from '../../model/age-type-enum';

@Injectable({
  providedIn: 'root'
})
export class CoreProfileService {
  protected readonly accountUrl = environment.url + '/api/v1/account/profile';
  constructor (protected readonly http: HttpClient) { }
  checkProfileStatus() {
    return this.http.get<ProfileStatusInfo>(this.accountUrl + '/status');
  }
  checkFieldStatus(field: ProfileField, type: ProgramType) {
    return this.http.get<CheckFieldStatus>(this.accountUrl + `/field-status/${field}/${type}`);
  }
  getProfileWithNationalCode(nationalCode: string) {
    return this.http.get<IGetProfileRoot>(this.accountUrl + `/${nationalCode}`);
  }
}
