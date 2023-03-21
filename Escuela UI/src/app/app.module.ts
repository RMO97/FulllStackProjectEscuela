import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesListComponent } from './Componentes/Estudiantes/estudiantes-list/estudiantes-list.component';
import { ExperienciasListComponent } from './Componentes/Experiencias/experiencias-list/experiencias-list.component';
import { MaestrosListComponent } from './Componentes/Maestros/maestros-list/maestros-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddEstudianteComponent } from './Componentes/Estudiantes/add-estudiante/add-estudiante.component';
import { AddExperienciaComponent } from './Componentes/Experiencias/add-experiencia/add-experiencia.component';
import { AddMaestroComponent } from './Componentes/Maestros/add-maestro/add-maestro.component';
import { FormsModule } from '@angular/forms';
import { EditEstudianteComponent } from './Componentes/Estudiantes/edit-estudiante/edit-estudiante.component';
import { EditExperienciaComponent } from './Componentes/Experiencias/edit-experiencia/edit-experiencia.component';
import { EditMaestroComponent } from './Componentes/Maestros/edit-maestro/edit-maestro.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesListComponent,
    ExperienciasListComponent,
    MaestrosListComponent,
    AddEstudianteComponent,
    AddMaestroComponent,
    AddExperienciaComponent,
    EditEstudianteComponent,
    EditExperienciaComponent,
    EditMaestroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
