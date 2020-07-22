import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor() // private toastr: ToastrService // private ngxService: NgxUiLoaderService,
  {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error, caught) => {
        this.handleError(error);
        return of(error);
      }) as any
    );
  }

  private handleError(err: HttpErrorResponse) {
    // this.ngxService.stopAll();
    let msg = "",
      t = "ServerErrorInterceptor";
    switch (err.status) {
      case 400:
        msg = err.error.error.message ?? err.error ?? err.message;
        console.log("ServerErrorInterceptor say", msg, t);

        // this.toastr.error(msg, t);
        break;

      default:
        msg = err.message;
        t = err.name;
        console.log("ServerErrorInterceptor say", msg, t);
        // this.toastr.error(msg,t);
        break;
    }
  }
}
