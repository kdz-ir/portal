import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenResultDto } from 'src/app/core/model/token-result-dto';
import { CheckCode } from '../model/check-code';
import { CreateUserInfo } from '../model/create-user-info';
import { ForgetPasswordInfo } from '../model/forget-password-info';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Injectable()
export class RepositoryService
{
  readonly url = `${environment.url}/api`;
  constructor(private readonly _httpClient: HttpClient, private readonly _authService: AuthenticationService) { }
  Login(loginInfo: { phoneNumber: string, password: string; }): Observable<TokenResultDto>
  {
    return this._httpClient.post<TokenResultDto>(`${this.url}/login`, loginInfo)
      .pipe(tap(trd => this._authService.setTokens(trd.refreshToken, trd.accessToken)));
  }
  sendSms(phoneNumber: number)
  {
    return this._httpClient.post(`${this.url}/register/checkphone`, { phoneNumber: `${phoneNumber}` });
  }
  checkCode(phoneNumber: number, code: number): Observable<CheckCode>
  {
    return this._httpClient.post<CheckCode>(`${this.url}/register/checkphone/validate`, { phoneNumber: `${phoneNumber}`, code: code });
  }
  createUser(userData: CreateUserInfo): Observable<TokenResultDto>
  {
    userData.phoneNumber = `${userData.phoneNumber}`;
    return this._httpClient.post<TokenResultDto>(`${this.url}/register`, userData)
      .pipe(tap(trd => this._authService.setTokens(trd.refreshToken, trd.accessToken)));
  }
  sendSmsForgetPassword(phoneNumber: number)
  {
    return this._httpClient.post(`${this.url}/ForgetPassword/checkphone`, { phoneNumber: `${phoneNumber}` });
  }
  forgetPassword(forgetPasswordinfo: ForgetPasswordInfo)
  {
    forgetPasswordinfo.phoneNumber = `${forgetPasswordinfo.phoneNumber}`;
    return this._httpClient.post<TokenResultDto>(`${this.url}/ForgetPassword/ChangePassword`, forgetPasswordinfo)
      .pipe(tap(trd => this._authService.setTokens(trd.refreshToken, trd.accessToken)));
  }
}
