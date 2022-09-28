import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private inject:Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loginService = this.inject.get(LoginService);
    
    let jwtToken = req.clone({

      setHeaders: {
        Authorization: 'bearer'+loginService.GetToken()
      }
    });
    return next.handle(jwtToken);

  }

  
}
