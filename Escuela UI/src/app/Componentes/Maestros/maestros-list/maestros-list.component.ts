import { Component, OnInit } from '@angular/core';
import { Maestros } from '../../../models/maestro';
import { MaestrosService } from '../../../services/maestros.service';

@Component({
  selector: 'app-maestros-list',
  templateUrl: './maestros-list.component.html',
  styleUrls: ['./maestros-list.component.css']
})
export class MaestrosListComponent implements OnInit {
  maestros: Maestros[] = [];

  constructor(private maestrosServicio: MaestrosService){}

  ngOnInit(): void {
      this.maestrosServicio.GetAllMaestros()
      .subscribe({
        next: (maestros)=>{
          this.maestros = maestros;
        },
        error:(response)=>{
          console.log(response);
        }
      })
  }

}
