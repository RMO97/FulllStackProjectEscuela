import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesListComponent } from './Componentes/Estudiantes/estudiantes-list/estudiantes-list.component';
import { MaestrosListComponent } from './Componentes/Maestros/maestros-list/maestros-list.component';
import { ExperienciasListComponent } from './Componentes/Experiencias/experiencias-list/experiencias-list.component';
import { AddEstudianteComponent } from './Componentes/Estudiantes/add-estudiante/add-estudiante.component';
import { AddExperienciaComponent } from './Componentes/Experiencias/add-experiencia/add-experiencia.component';
import { AddMaestroComponent } from './Componentes/Maestros/add-maestro/add-maestro.component';
import { EditMaestroComponent } from './Componentes/Maestros/edit-maestro/edit-maestro.component';
import { EditEstudianteComponent } from './Componentes/Estudiantes/edit-estudiante/edit-estudiante.component';
import { EditExperienciaComponent } from './Componentes/Experiencias/edit-experiencia/edit-experiencia.component';

const routes: Routes = [
  {
    path:'estudiantes',
    component: EstudiantesListComponent
  },

  {
    path:'maestros',
    component: MaestrosListComponent

  },

  {
    path:'experiencias',
    component: ExperienciasListComponent
  },

  {
    path:'estudiantes/add',
    component: AddEstudianteComponent

  },

  {
    path:'maestros/add',
    component: AddMaestroComponent

  },

  {
    path:'experiencias/add',
    component: AddExperienciaComponent

  },

  {
    path:'maestros/edit/:id',
    component: EditMaestroComponent

  },

  {
    path:'experiencias/edit/:id',
    component: EditExperienciaComponent

  },

  {
    path:'estudiantes/edit/:id',
    component: EditEstudianteComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
