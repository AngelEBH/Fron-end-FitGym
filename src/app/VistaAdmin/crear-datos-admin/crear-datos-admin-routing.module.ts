import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearDatosAdminPage } from './crear-datos-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CrearDatosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearDatosAdminPageRoutingModule {}
