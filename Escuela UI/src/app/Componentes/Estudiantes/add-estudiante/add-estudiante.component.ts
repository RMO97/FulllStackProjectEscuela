import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../../../models/estudiantes';
import { EstudiantesService } from '../../../services/estudiantes.service';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html',
  styleUrls: ['./add-estudiante.component.css']
})
export class AddEstudianteComponent implements OnInit {

  addEstudianteRequest: Estudiante={
    id:"",
    nombre: '',
    apellido:'',
    edad:0,
    genero:''
  };
  constructor(private estudianteServicio: EstudiantesService, private router : Router){}

  ngOnInit(): void {
      
  }

  agregarEstudiante(){
    this.estudianteServicio.AddEstudiante(this.addEstudianteRequest)
    .subscribe({
      next:(estudiante)=>{
        this.router.navigate(['estudiantes']);
      }
    });
  }
}
