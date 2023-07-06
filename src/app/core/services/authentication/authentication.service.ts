import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { isNil } from 'lodash-es';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { TokenResultDto } from '../../model/token-result-dto';
import { BehaviorSubject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _isRefreshing = false;
  private _refreshTokenSubject: BehaviorSubject<TokenResultDto>;
  constructor (private _jwtService: JwtHelperService, private _http: HttpClient) {
    this._refreshTokenSubject = new BehaviorSubject<TokenResultDto>(null);
  }
  public getTokenItem<T>(key: string): T {
    return <T>this._jwtService.decodeToken()[key];
  }
  public get isAuthenticated(): boolean {
    if (this._jwtService.isTokenExpired()) {
      return false;
    }
    return true;
  }

  private set _accessToken(accessToken: string) {
    localStorage.setItem(environment.accessToken, accessToken);
  }
  private get _accessToken() {
    return this._jwtService.tokenGetter();
  }
  private get _refreshToken(): string {
    return localStorage.getItem(environment.refreshToken);
  }
  setTokens(accessToken: string) {

    this._accessToken = accessToken;
  }
  storeToken(tokensDto: TokenResultDto) {
    this._accessToken = tokensDto.entity.access_token;
  }
  public async loginOut() {
    // await this._http.get(`${environment.url}/api/logout`).toPromise();
    this._systemLogout();
  }
  private _systemLogout() {
    localStorage.clear();
    window.location.reload();
  }
  refreshToken() {
    if (this._isRefreshing) {
      return;
    }
    if (this._isRefreshing === false) {
      this._refreshTokenSubject.next(null);
    }
    this._isRefreshing = true;
    return this._http.post<TokenResultDto>(`${environment.url}/api/v1/account/auth/refresh`, {
      refreshToken: this._refreshToken
    }).pipe(tap((tokens) => {
      this.storeToken(tokens);
      this._isRefreshing = false;
    }), catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 422) {
        this._systemLogout();
      }
      return throwError(error);
    }));
  }
  addToken(request: HttpRequest<any>, token?: string) {
    if (isNil(token)) {
      token = this._accessToken;
    }
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this._isRefreshing) {
      return this.refreshToken().pipe(
        switchMap((token) => {
          this._isRefreshing = false;
          this._refreshTokenSubject.next(token);
          return next.handle(this.addToken(request));
        }));
    }
    else {
      return this._refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => next.handle(this.addToken(request, jwt.entity.access_token))));
    }
  }
}
