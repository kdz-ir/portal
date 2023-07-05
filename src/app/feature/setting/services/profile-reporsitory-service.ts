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
    super();
  }
  getProfileData() {
    return this.http.get<ProfileShowInfo>(this.accountUrl + '');
  }
  updateProfile(profileInfo: ProfileSaveInfo) {
    return this.http.post(this.accountUrl + '', profileInfo);
  }
  uploadzorostrianCard(data: any) {
    return this.http.post(`${this.accountUrl}/manthra/zoroastrianCard`, data);
  }
}
