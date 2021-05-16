import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CoreProfileService } from "src/app/core/services/user/core-profile.service";
import { environment } from "src/environments/environment";
import { ProfileSaveInfo, ProfileShowInfo } from "../models/profile-info";

@Injectable({
  providedIn: 'root'
})
export class ProfileRepositoryService extends CoreProfileService {
  constructor (http: HttpClient) {
    super(http);
  }
  getProfileData() {
    return this.http.get<ProfileShowInfo>(this.accountUrl + '/profile');
  }
  updateProfile(profileInfo: ProfileSaveInfo) {
    return this.http.post(this.accountUrl + '/profile', profileInfo);
  }
  uploadzorostrianCard(data: any) {
    return this.http.post(`${this.accountUrl}/manthra/zoroastrianCard`, data);
  }
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
