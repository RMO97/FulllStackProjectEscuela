import { Component, OnInit } from '@angular/core';
import { Maestros } from 'src/app/models/maestro';
import { MaestrosService } from '../../../services/maestros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-maestro',
  templateUrl: './add-maestro.component.html',
  styleUrls: ['./add-maestro.component.css']
})
export class AddMaestroComponent implements OnInit {
  addMaestroRequest:Maestros={
    id:"",
    nombreMtro:"",
    edadMtro:0
  };

  constructor(private maestrosServicio: MaestrosService, private router: Router){}

  ngOnInit(): void {
      
  }

  agregarMaestro(){
    this.maestrosServicio.AddMaestro(this.addMaestroRequest)
    .subscribe({
      next:(maestro)=>{
        this.router.navigate(['maestros']);
      }
    });
  }

}
