import { Injectable } from '@angular/core';
import {
HttpRequest,
HttpHandler,
HttpEvent,
HttpInterceptor,
HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { TokenResultDto } from '../model/token-result-dto';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor (private _authService: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this._authService.isAuthenticated) {
      request = this._authService.addToken(request);
    }
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status == 401) {
        return this.handle401Error(request, next);
      }
      return throwError(error);
    }));
  }
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<TokenResultDto> = new BehaviorSubject<TokenResultDto>(null);

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    this._authService.loginOut();
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this._authService.refreshToken().pipe(
        switchMap((token) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token);
          return next.handle(this._authService.addToken(request));
        }));
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => next.handle(this._authService.addToken(request, jwt.entity.access_token))));
    }
  }
}
