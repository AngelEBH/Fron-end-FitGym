import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearGimnasioPage } from './crear-gimnasio.page';

const routes: Routes = [
  {
    path: '',
    component: CrearGimnasioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearGimnasioPageRoutingModule {}
