import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiantes';
import { EstudiantesService } from '../../../services/estudiantes.service';

@Component({
  selector: 'app-edit-estudiante',
  templateUrl: './edit-estudiante.component.html',
  styleUrls: ['./edit-estudiante.component.css']
})
export class EditEstudianteComponent implements OnInit {
  estudianteDetalles: Estudiante={
    id:'',
    nombre:'',
    apellido:'',
    edad:0,
    genero:''

  };
  
  constructor(private route: ActivatedRoute, private estudianteServicio: EstudiantesService, private router: Router){}

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params)=>{
          const id = params.get('id');

          if(id){
            this.estudianteServicio.GetEstudiante(id)
            .subscribe({
              next:(response)=>{
                this.estudianteDetalles = response;
              }
            });
          }

        }
      });
  }


  actualizarEstudiante(){
    this.estudianteServicio.UpdateEstudiante(this.estudianteDetalles.id, this.estudianteDetalles)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['estudiantes'])
      }
    });
  }

  borrarEstudiante(id: string){
    this.estudianteServicio.DeleteEstudiante(id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['estudiantes']);
      }
    });
  }
}
