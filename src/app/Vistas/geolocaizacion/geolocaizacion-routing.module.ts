import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocaizacionPage } from './geolocaizacion.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocaizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocaizacionPageRoutingModule {}
