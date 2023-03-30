import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from './Model/Tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {


  private apiUrl = 'http://localhost:8080/api/v1/taches';
  
  constructor(private http: HttpClient) { }

  addTache(data: any): Observable<any> {

   if(data.id){
  
    return this.http.put<any>(this.apiUrl,data);

   }else{
    return this.http.post<any>(this.apiUrl, data);
   
   }



  }
  getTaches(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  removeTache(id : any): Observable<any> {
    return this.http.delete<any>(this.apiUrl+'/' + id);
  }
  getTache(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/' + id);
  }
  getTacheByStatus(data : string): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/status/' + data);
  }

}
