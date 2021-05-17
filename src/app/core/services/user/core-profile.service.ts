import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { gataHaRegisterFilledInfo } from '../../model/gata-ha-register-filled';
import { ProfileStatusInfo } from '../../model/profile-status-info';

@Injectable({
  providedIn: 'root'
})
export class CoreProfileService {
  protected readonly accountUrl = environment.url + '/api/v1/account';
  constructor (protected readonly http: HttpClient) { }
  checkProfileStatus() {
    return this.http.get<ProfileStatusInfo>(this.accountUrl + '/profileStatus');
  }
  getUserRegisteredFilled() {
    return this.http.get<gataHaRegisterFilledInfo>(this.accountUrl + '/manthra/gat-ha/getLastRegister');
  }
}
