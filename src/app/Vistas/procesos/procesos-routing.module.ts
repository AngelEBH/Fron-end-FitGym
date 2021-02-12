import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesosPage } from './procesos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesosPage
  },
  {
    path: 'rutina-bicep',
    loadChildren: () => import('./rutina-bicep/rutina-bicep.module').then( m => m.RutinaBicepPageModule)
  },
  {
    path: 'rutina-espalda',
    loadChildren: () => import('./rutina-espalda/rutina-espalda.module').then( m => m.RutinaEspaldaPageModule)
  },
  {
    path: 'rutina-pecho',
    loadChildren: () => import('./rutina-pecho/rutina-pecho.module').then( m => m.RutinaPechoPageModule)
  },
  {
    path: 'rutina-triceps',
    loadChildren: () => import('./rutina-triceps/rutina-triceps.module').then( m => m.RutinaTricepsPageModule)
  },
  {
    path: 'rutina-hombros',
    loadChildren: () => import('./rutina-hombros/rutina-hombros.module').then( m => m.RutinaHombrosPageModule)
  },
  {
    path: 'rutina-piernas',
    loadChildren: () => import('./rutina-piernas/rutina-piernas.module').then( m => m.RutinaPiernasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesosPageRoutingModule {}
