import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorInterceptor implements HttpInterceptor { // ErrorInterceptor üzerine gelip cntr+nokta ile HttpInterceptor'i implement et..

    // req: HttpRequest<any>, next: HttpHandler
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // request objesini tekrar handler aracılığıyla req: HttpRequest<any>'i tekrar geriye gönderiyoruz..
        return next.handle(req).pipe(
            catchError((response: HttpErrorResponse) => {
                let message = "hata oluştu.";

                console.log(response);

                // client kaynaklı hata
                if(response.status === 400) {

                  if (response.error) {
                    return throwError(response.error);
                }

                  if(response.error.error) {
                   const serverError = response.error;
                   let errorMessage='';

                   for(const key in serverError.errors){
                    errorMessage += serverError.errors[key] + '\n';
                  }

                  return throwError(errorMessage);
                }

                message = "kullanıcı adı hatalı";
                console.log(message);
                return throwError(response.error.message);
              }

                if(response.status === 401) {
                  message = "yetkiniz yok"; // şifre hatası
                  console.log(message);
                  return throwError(response.statusText);
                }

                // server kaynaklı hata
                if(response.status === 500) {

                  return throwError(response.error.Message);
                }


                return throwError(message); // cntr+nokta ile implement et..
            }))


    }

}
