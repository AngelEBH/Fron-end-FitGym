import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleInfinityGynPage } from './detalle-infinity-gyn.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleInfinityGynPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleInfinityGynPageRoutingModule {}
