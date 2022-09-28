import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { identifierName } from '@angular/compiler';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  Url =environment.API_URL+"/api/v1/employee";

  constructor(private http:HttpClient) { }

  postEmployee(data:any){
    return this.http.post(this.Url+"/add", data);
   
  } 

  getAllDivision(): Observable<any>{
    return this.http.get(environment.API_URL+"/api/v1/divisions")
    
  }
  getAllEmployee():Observable<any>{
    return this.http.get(this.Url+"/all")
  
  }
  updateEmployee(id:number,data:any){
    data = {
      firstName: data.value.firstName,
      middleName: data.value.middleName,
      lastName: data.value.lastName,
      email: data.value.email,
      phone: data.value.phoneNo,
      division: data.value.division
    }
    return this.http.put(this.Url+"/update/"+id,data)
    
  }

  deleteEmployee(id:number){
    return this.http.delete<any>(this.Url+"/delete/"+id)
    
  }
}
