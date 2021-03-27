import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor (private readonly _snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          switch ((err as HttpErrorResponse).status) {
            case 0:
              this._snackBar.open('دسترسی به اینترنت ممکن نیست.');
              break;
            case 400:
              this._snackBar.open(err.error);
              break;
            case 422:
              const entityError = err.error.entity;
              Object.getOwnPropertyNames(entityError).forEach(pr => {
                entityError[pr].forEach(mess => {
                  this._snackBar.open(mess);
                });
              });


              break;
            case 500:
              this._snackBar.open('سامانه قطع است شکیبا باشید ');
              break;
            case 504:
              if (navigator.onLine) {
                this._snackBar.open('سامانه قطع است شکیبا باشید ');
              }
              break;
          }
        }

        return throwError(err);
      }));
  }
}
