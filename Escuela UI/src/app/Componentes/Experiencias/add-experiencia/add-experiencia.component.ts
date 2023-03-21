import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciasService } from '../../../services/experiencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  addExperienciaRequest:Experiencia={
    id:"",
    nombreExp:"",
    academico:""
  };
  constructor(private exerienciasServicio: ExperienciasService, private router: Router){}

  ngOnInit(): void {
      
  }

  agregarExperiencia(){
    this.exerienciasServicio.AddExperiencia(this.addExperienciaRequest)
    .subscribe({
      next:(experiencia)=>{
        this.router.navigate(['experiencias'])
      }
    });
  }

}
