import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, retry, tap } from 'rxjs';

export class Interceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(2),
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          throw err;
        }
      )
    );
  }
}
