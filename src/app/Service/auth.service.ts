import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// const httpOptions = {
  //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = "http://localhost:8080/api/auth/";
  constructor(private http: HttpClient) {}
  
  login(data:any) {
    return this.http.post(this.apiUrl + 'signin',data);
  }
  register(data:any){
    return this.http.post(this.apiUrl + 'signup',data);
     
  }
  logout(): Observable<any> {
    return this.http.post(this.apiUrl + 'signout', { });
  }
}