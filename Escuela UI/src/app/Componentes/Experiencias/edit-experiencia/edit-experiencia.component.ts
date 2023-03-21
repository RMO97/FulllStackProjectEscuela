import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciasService } from '../../../services/experiencias.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  experienciasDetalles: Experiencia={
    id:'',
    nombreExp:'',
    academico:''
  };

  constructor(private route: ActivatedRoute, private experienciasSerivcio:ExperienciasService, private router: Router){}

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params)=>{
          const id = params.get('id');

          if(id){
            this.experienciasSerivcio.GetExperiencia(id)
            .subscribe({
              next:(response)=>{
                this.experienciasDetalles = response;
              } 
            });
          }
        }
      });
  }

  actualizarExperiencia(){
    this.experienciasSerivcio.UpdateExperiencia(this.experienciasDetalles.id,this.experienciasDetalles)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['experiencias']);
      }
    });
  }

  borrarExperiencia(id: string){
    this.experienciasSerivcio.DeleteExperiencia(id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['experiencias']);
      }
    });
  }
  
}
