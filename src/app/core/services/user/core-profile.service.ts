import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { gataHaRegisterFilledInfo } from '../../model/gata-ha-register-filled';
import { CheckFieldStatus, ProfileStatusInfo } from '../../model/profile-status-info';
import { ProfileField, ProgramType } from '../../model/age-type-enum';

@Injectable({
  providedIn: 'root'
})
export class CoreProfileService {
  protected readonly accountUrl = environment.url + '/api/v1/account';
  constructor (protected readonly http: HttpClient) { }
  checkProfileStatus() {
    return this.http.get<ProfileStatusInfo>(this.accountUrl + '/profile/status');
  }
  getUserRegisteredFilled() {
    return this.http.get<gataHaRegisterFilledInfo>(this.accountUrl + '/manthra/gat-ha/getLastRegister');
  }
  checkFieldStatus(field:ProfileField,type:ProgramType){
  return this.http.get<CheckFieldStatus>(this.accountUrl+`/profile/field-status/${field}/${type}`)
  }
}
