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

  public get isAuthenticated(): boolean {
    if (isNil(this._jwtService.tokenGetter()) || isNil(this._refreshToken)) {
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
  private set _refreshToken(refreshToken: string) {
    localStorage.setItem(environment.refreshToken, refreshToken);
  }
  private get _refreshToken(): string {
    return localStorage.getItem(environment.refreshToken);
  }
  setTokens(refreshToken: string, accessToken: string) {
    this._refreshToken = refreshToken;
    this._accessToken = accessToken;
  }
  storeToken(tokensDto: TokenResultDto) {
    this._refreshToken = tokensDto.refreshToken;
    this._accessToken = tokensDto.accessToken;
  }
  public async loginOut() {
    await this._http.get(`${environment.url}/api/logout`).toPromise();
    this._systemLogout();
  }
  private _systemLogout() {
    localStorage.removeItem(environment.accessToken);
    localStorage.removeItem(environment.refreshToken);
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
    return this._http.post<TokenResultDto>(`${environment.url}/api/token`, {
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
        switchMap(jwt => next.handle(this.addToken(request, jwt.accessToken))));
    }
  }
}
