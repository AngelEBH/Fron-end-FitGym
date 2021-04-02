import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleDatosAdPage } from './detalle-datos-ad.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleDatosAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleDatosAdPageRoutingModule {}
