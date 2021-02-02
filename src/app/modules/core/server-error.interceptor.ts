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
import { HelperService } from '../core/helper.service';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(
    public helperService: HelperService
  ) // private toastr: ToastrService // private ngxService: NgxUiLoaderService,
  {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err, caught) => {
        //debugger
        let msg = err?.error?.error?.message ?? err?.error ?? err?.message;
        this.helperService?.updatedLoginStatus$({
          message: msg,
          status: err?.status 
        });
        //this.handleError(error);
        return of(err);
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
        // console.log("ServerErrorInterceptor say", msg, t);

        // this.toastr.error(msg, t);
        //break;
      default:
        msg = err.message;
        t = err.name;
        // console.log("ServerErrorInterceptor say", msg, t);
        // this.toastr.error(msg,t);
        //break;
    }
    this.helperService.updatedLoginStatus$(msg);

    //return msg;
  }
}
