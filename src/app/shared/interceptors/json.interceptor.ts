import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class JsonInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          if (!evt.headers.has('Content-Type')) {
            evt.headers.append('Content-Type', 'application/json');
          }

          if (evt.body && evt.body.success)
            this.toasterService.success(evt.body.success.message, evt.body.success.title, {
              positionClass: 'toast-bottom-center',
            });
        }
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          try {
            this.toasterService.error(err.message, err.statusText);
          } catch (e) {
            this.toasterService.error('An error occurred');
          }
        }
        return throwError(err);
      }),
    );
  }
}
