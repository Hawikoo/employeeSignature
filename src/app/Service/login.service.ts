import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
 Url = 'https//localhost:8080';
  constructor(private http:HttpClient) { }

  Login(UserCredential:any){
    return this.http.post(this.Url, UserCredential)

  }

  isLoggedIn(){
    return !!localStorage.getItem('token'); /* localStorage.getItem('token');/* !=null */ 
  }

  GetToken(){
    return localStorage.getItem('token') || '' //actual token
  }

  GetAccess(){
    var loggedToken = localStorage.getItem('token') || ''

    var ExtractedToken = loggedToken.split('.')[1]

    var AtobData = atob(ExtractedToken);

    var FinalData = JSON.parse(AtobData);

    if(FinalData){
      console.log(FinalData.role ='')
      return true;
    }
    else{
      return false;
    }

  }
}
