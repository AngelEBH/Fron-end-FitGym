import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRutinasPage } from './admin-rutinas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRutinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRutinasPageRoutingModule {}
