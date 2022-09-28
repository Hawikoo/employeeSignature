import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { identifierName } from '@angular/compiler';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Api1Service {
  Url =environment.API_URL+"/api/auth";
  constructor(private http:HttpClient) 
 {} 
 
 postUser(data:any){
  return this.http.post(this.Url+"/signup", data);
 
} 
getAllEmployee():Observable<any>{
  return this.http.get(environment.API_URL+"/api/v1/employee/all");
}
getAllUser():Observable<any>{
  return this.http.get(this.Url+"/all")

}
deleteUser(id:number){
  return this.http.delete<any>(this.Url+"/delete/"+id)
  
}
updateUser(id:number,data:any){
  data = {
   
    password: data.value.password,
    email: data.value.email,
  
    username: data.value.username,
    employee: data.value.employee
  }
  return this.http.put(this.Url+"/update/"+id,data)
  
}
}
