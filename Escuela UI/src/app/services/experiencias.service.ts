import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  GetAllExperiencias(): Observable<Experiencia[]>{

    return this.http.get<Experiencia[]>(this.baseApiUrl + '/api/Experiencias');
    
  }

  AddExperiencia(addExperienciaRequest: Experiencia): Observable<Experiencia>{
    addExperienciaRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Experiencia>(this.baseApiUrl+"/api/Experiencias",addExperienciaRequest);
  }

  GetExperiencia(id: string): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.baseApiUrl+'/api/Experiencias/'+id);
  }

  UpdateExperiencia(id: string, updateExperienciaRequest: Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(this.baseApiUrl+'/api/Experiencias/'+id,updateExperienciaRequest);
  }

  DeleteExperiencia(id: string): Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.baseApiUrl+'/api/Experiencias/'+id)
  }

}
