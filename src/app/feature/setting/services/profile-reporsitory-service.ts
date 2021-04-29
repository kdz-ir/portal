import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ProfileSaveInfo, ProfileShowInfo } from "../models/profile-info";

@Injectable({
  providedIn:'root'
})
export class ProfileRepositoryService {
  private readonly _url = environment.url+'/api/v1/account';
  constructor (private readonly _http: HttpClient) {
  }
    getProfileData() {
      return this._http.get<ProfileShowInfo>(this._url+'/profile');
    }
    updateProfile(profileInfo:ProfileSaveInfo) {
      return this._http.post(this._url+'/profile', profileInfo);
    }
  //   changeParkMode(id: string, isActive: boolean) {
  //     return this.http.post(`${this.url}/SwitchParkingMode/${id}`, { IsParkMode: isActive });
  //   }
  //   changeGeoFenceMode(id: string, isActive: boolean) {
  //     return this.http.post(`${this.url}/SwitchGeoFenceMode/${id}`, { IsGeoFence: isActive });
  //   }
  //   deleteDevice(id: string) {
  //     return this.http.delete(`${this.url}/${id}`);
  //   }
  //   sendCheckSMSCode(id: string) {
  //     return this.http.post(this.url + '/SendSmsCode', { id: id });
  //   }
  //   checkSMSCode(id: string, smsCode: number) {
  //     return this.http.post<boolean>(this.url + '/CheckSmsCode', { id, smsCode: +smsCode });
  //   }
  //   updateGeoFence(id: string, geoFenceUpdate: UpdateGeoFenceInfo) {
  //     return this.http.post(`${this.url}/UpdateGeoFence/${id}`, geoFenceUpdate);
  //   }
}
