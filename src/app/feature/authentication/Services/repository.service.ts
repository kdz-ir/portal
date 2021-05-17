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
export class RepositoryService {
  readonly url = `${environment.url}/api/v1/account`;
  constructor (private readonly _httpClient: HttpClient, private readonly _authService: AuthenticationService) { }
  Login(loginInfo: { nationalCode: string, password: string, token: string; }): Observable<TokenResultDto> {
    return this._httpClient.post<TokenResultDto>(`${this.url}/auth/login`, loginInfo)
      .pipe(tap(trd => this._authService.setTokens(trd.entity.access_token)));
  }
  sendSms(mobile: string, captcha: string) {
    return this._httpClient.post(`${this.url}/register/mobile`, { mobile, token: captcha });
  }
  checkCode(phoneNumber: number, code: number, token: string): Observable<CheckCode> {
    return this._httpClient.post<CheckCode>(`${this.url}/register/verify`, { mobile: phoneNumber, otp: code, token });
  }
  createUser(userData: CreateUserInfo): Observable<TokenResultDto> {
    return this._httpClient.post<TokenResultDto>(`${this.url}/register/create`, userData);
  }
  sendSmsForgetPassword(mobile: string, nationalCode: string, token: string) {
    return this._httpClient.post(`${this.url}/ForgetPassword/checkphone`, { mobile, nationalCode, token });
  }
  forgetPassword(forgetPasswordinfo: ForgetPasswordInfo) {
    return this._httpClient.post<TokenResultDto>(`${this.url}/submitPasswordForForgetPassword`, forgetPasswordinfo);
  }
}
