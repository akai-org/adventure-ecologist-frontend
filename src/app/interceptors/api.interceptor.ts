import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {ApiService} from "../services/api.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.startsWith(ApiService.API_URL)) {
      const token = this.authService.token;
      if (token != null) {
        request = request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)});
      }
      request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    }
    return next.handle(request);
  }
}
