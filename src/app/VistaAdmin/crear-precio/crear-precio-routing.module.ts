import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPrecioPage } from './crear-precio.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPrecioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPrecioPageRoutingModule {}
