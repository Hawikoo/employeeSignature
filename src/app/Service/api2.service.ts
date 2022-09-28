import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class API2Service {
  apiUrl =environment.API_URL+"/api/v1/image";

  constructor(private http:HttpClient) { }
  postImage(data:any){
    return this.http.post(this.apiUrl+"/file", data);
    
  }
  getAllEmployee(): Observable<any>{
      return this.http.get(environment.API_URL+"/api/v1/employee/all");
    
}
getAllImage():Observable<any>{
        return this.http.get(this.apiUrl+"/all")
      
      }
// getImageByCoopId(id):Observable<any>{
//   return this.http.get(this.apiUrl+"/check/"+ id)
// }
}