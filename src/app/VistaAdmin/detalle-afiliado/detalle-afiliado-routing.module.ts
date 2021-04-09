import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAfiliadoPage } from './detalle-afiliado.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAfiliadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAfiliadoPageRoutingModule {}
