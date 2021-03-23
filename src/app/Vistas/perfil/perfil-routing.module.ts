import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  },
  {
    path: 'rutina-gimnasio',
    loadChildren: () => import('./rutina-gimnasio/rutina-gimnasio.module').then( m => m.RutinaGimnasioPageModule)
  },
  {
    path: 'proceso-gimnasio',
    loadChildren: () => import('./proceso-gimnasio/proceso-gimnasio.module').then( m => m.ProcesoGimnasioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
