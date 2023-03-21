import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-estudiantes-list',
  templateUrl: './estudiantes-list.component.html',
  styleUrls: ['./estudiantes-list.component.css']
})
export class EstudiantesListComponent implements OnInit {

  estudiantes: Estudiante[] = [
   
  ];

  constructor(private estudianteServicio: EstudiantesService){}
  
  ngOnInit():void{
    this.estudianteServicio.GetAllEstudiantes()
    .subscribe({
      next: (estudiantes)=>{
        this.estudiantes = estudiantes;
      },
      error: (response)=>{
        console.log(response);
      }
    })
  }
}
