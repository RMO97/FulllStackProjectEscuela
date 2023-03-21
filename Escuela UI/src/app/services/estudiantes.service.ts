import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Estudiante } from '../models/estudiantes';
import {Observable} from 'rxjs';
import { OverrideKeyword } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  
  GetAllEstudiantes(): Observable<Estudiante[]>{

    return this.http.get<Estudiante[]>(this.baseApiUrl + "/api/Estudiantes");

  }

  AddEstudiante(addEstudianteRequest: Estudiante): Observable<Estudiante>{

    addEstudianteRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Estudiante>(this.baseApiUrl + "/api/Estudiantes", addEstudianteRequest);
  }

  GetEstudiante(id: string): Observable<Estudiante>{
    return this.http.get<Estudiante>(this.baseApiUrl+'/api/Estudiantes/'+id);
  }

  UpdateEstudiante(id : string, updateEstudianteRequest: Estudiante): Observable<Estudiante>{
    return this.http.put<Estudiante>(this.baseApiUrl+'/api/Estudiantes/'+id, updateEstudianteRequest);
  }

  DeleteEstudiante(id: string): Observable<Estudiante>{
    return this.http.delete<Estudiante>(this.baseApiUrl+'/api/Estudiantes/'+id);
  }


}
