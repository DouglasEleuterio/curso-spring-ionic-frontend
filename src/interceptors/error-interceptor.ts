import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Passou no interceptor");
    return next.handle(req)
      .catch((error, caught) => {

        let erroObj = error;
        if (erroObj.error) {
          erroObj = erroObj.error;
        }

        if (erroObj.satus) {
          erroObj = JSON.parse(erroObj);
        }

        console.log("Erro detectado pelo interceptor");
        console.log(erroObj);

        return Observable.throw(erroObj);
      }) as any;
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
