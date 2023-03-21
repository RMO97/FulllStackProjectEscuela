import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Maestros } from 'src/app/models/maestro';

@Injectable({
  providedIn: 'root'
})
export class MaestrosService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetAllMaestros(): Observable<Maestros[]>{
    return this.http.get<Maestros[]>(this.baseApiUrl + '/api/Maestros');
  }

  AddMaestro(addMaestroRequest: Maestros):Observable<Maestros>{
    addMaestroRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Maestros>(this.baseApiUrl + '/api/Maestros',addMaestroRequest);
  }

  GetMaestro(id: string): Observable<Maestros>{
    return this.http.get<Maestros>(this.baseApiUrl+'/api/Maestros/'+id);
  }

  UpdateMaestro(id: string, updateMaestroRequest: Maestros): Observable<Maestros>{
    return this.http.put<Maestros>(this.baseApiUrl+'/api/Maestros/'+id, updateMaestroRequest);
  }
  
  DeleteMaestro(id: string):Observable<Maestros>{
    return this.http.delete<Maestros>(this.baseApiUrl+'/api/Maestros/'+id);
  }

}
