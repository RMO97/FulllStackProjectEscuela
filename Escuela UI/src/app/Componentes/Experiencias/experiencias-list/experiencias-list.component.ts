import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from 'src/app/services/experiencias.service';
import { Experiencia } from '../../../models/experiencia';

@Component({
  selector: 'app-experiencias-list',
  templateUrl: './experiencias-list.component.html',
  styleUrls: ['./experiencias-list.component.css']
})
export class ExperienciasListComponent implements OnInit {
  
  experiencias:Experiencia[] =[];

  constructor(private experienciasServicio: ExperienciasService){}

  ngOnInit(): void {
      this.experienciasServicio.GetAllExperiencias()
      .subscribe({
        next: (experiencias)=>{
          this.experiencias = experiencias;
        },
        error: (response) =>{
          console.log(response)
        }
      })
  }
}
