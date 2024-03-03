import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError} from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    //console.log("Interception In Progress"); // Interception Stage
    const token:any = sessionStorage.getItem('jwtToken');
    //console.log(token);
    //const token: any = sessionStorage.getItem('token'); // This retrieves a token from local storage
    req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });// This clones HttpRequest and Authorization header with Bearer token added
    //req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    //req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    if (req.body instanceof FormData) {
      // Clone the request and set the Content-Type header to null
      /*req = req.clone({
        setHeaders: {
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxGKLearn2024'
        }
      });*/

      return next.handle(req);
    } else {
      // If the request body is not FormData, proceed with the original request
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      return next.handle(req);
    }

    
   }

}