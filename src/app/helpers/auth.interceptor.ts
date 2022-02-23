import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
//import { TokenStorageService } from '../service/token_storage/token-storage.service';
import { Observable } from 'rxjs';
import { DataServiceService } from '../service/dataService/data-service.service';
import { environment } from 'src/environments/environment';
import { KeyObject } from 'crypto';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private dataServiceService: DataServiceService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.dataServiceService.userValue;
    const isLoggedIn = user;
    const isApiUrl = request.url.startsWith(environment.API_URL);
    const token = JSON.parse(localStorage.getItem('accessToken')!);

    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
