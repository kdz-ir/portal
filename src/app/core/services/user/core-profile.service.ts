import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { gataHaRegisterFilledInfo } from '../../model/gata-ha-register-filled';
import { CheckFieldStatus, IGetProfileRoot, ProfileStatusInfo } from '../../model/profile-status-info';
import { ProfileField } from "../../model/ProfileField";
import { ProgramType } from "../../model/ProgramType";
import { IMinimumProfileSaveInfo } from 'src/app/shared/modules/shared-profile/models/IMinimumProfileSaveInfo';
import { ProgramFieldMode } from '../../model/ProgramFieldMode';
import { IBaseProfileShow } from 'src/app/shared/modules/shared-profile/models/IBaseProfileShow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreProfileService {
  protected readonly accountUrl = environment.url + '/api/v1/account/profile';
  protected readonly http = inject(HttpClient);
  checkProfileStatus() {
    return this.http.get<ProfileStatusInfo>(this.accountUrl + '/status');
  }
  checkFieldStatus(field: ProfileField, type: ProgramType) {
    return this.http.get<CheckFieldStatus>(this.accountUrl + `/field-status/${field}/${type}`);
  }
  getProfileWithNationalCode(nationalCode: string, program: ProgramType, fieldMode: ProgramFieldMode) {
    return this.http.post<IGetProfileRoot>(this.accountUrl + '/national-code', { nationalCode, program, fieldMode });
  }
  saveProfileWithNationalCode(data: IMinimumProfileSaveInfo) {
    return this.http.post(this.accountUrl + '/createProfileWithNationalCode', data);
  }
  public profileData<T>(): Observable<T> {
    return this.http.get<T>(this.accountUrl);
  }
}
