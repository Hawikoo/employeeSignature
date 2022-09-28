import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private loginService:LoginService, private route:Router){}
  canActivate(){
    if(this.loginService.GetAccess()){
      return true;
    }
    else{
      this.route.navigate([''])
      return false;
    }
  }
  
}
