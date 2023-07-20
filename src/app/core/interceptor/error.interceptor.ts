import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { isNil, isNull } from "lodash-es";
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwalService } from '../services/swal/swal.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor (private readonly _snackBar: MatSnackBar, private readonly _swal: SwalService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          switch ((err as HttpErrorResponse).status) {
            case 0:
              this._snackBar.open('دسترسی به اینترنت ممکن نیست.');
              break;
            case 400:
              this._swal.showErrorMessage(err.error);
              break;
            case 422:
              const serverMessages: string[] = [];
              const message = err.error.message;
              if (!isNil(err.error.entity)) {
                const entityError = err.error.entity;
                if (!isNull(entityError))
                  Object.getOwnPropertyNames(entityError).forEach(pr => {
                    entityError[pr].forEach((mess: string) => {
                      serverMessages.push(mess);
                    });
                  });
                else
                  serverMessages.push(message);

              }
              else {
                if (!isNil(err.error.errors)) {
                  const entityError = err.error.errors;
                  if (!isNull(entityError))
                    Object.getOwnPropertyNames(entityError).forEach(pr => {
                      entityError[pr].forEach((mess: string) => {
                        serverMessages.push(mess);
                      });
                    });
                  else
                    serverMessages.push(message);
                }
              }
              if (serverMessages.length != 0)
                this._swal.showErrorMessages(serverMessages);
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
