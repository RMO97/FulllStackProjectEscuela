import { Component, OnInit } from '@angular/core';
import { Maestros } from 'src/app/models/maestro';
import { ActivatedRoute, Router } from '@angular/router';
import { MaestrosService } from '../../../services/maestros.service';

@Component({
  selector: 'app-edit-maestro',
  templateUrl: './edit-maestro.component.html',
  styleUrls: ['./edit-maestro.component.css']
})
export class EditMaestroComponent implements OnInit{

  maestrosDetalles: Maestros={
    id:'',
    nombreMtro:'',
    edadMtro:0
  };

  constructor(private route: ActivatedRoute, private maestrosSerivcio: MaestrosService, private router: Router){}

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params)=>{
          const id = params.get('id');

          if(id){
            this.maestrosSerivcio.GetMaestro(id)
            .subscribe({
              next:(response)=>{
                this.maestrosDetalles = response;
              }
            });
          }
        }
      });
  }

  actualizarMaestro(){
    this.maestrosSerivcio.UpdateMaestro(this.maestrosDetalles.id, this.maestrosDetalles)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['maestros'])
      }
    });
  }

  borrarMaestro(id: string){
    this.maestrosSerivcio.DeleteMaestro(id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['maestros']);
      }
    });
  }
}
