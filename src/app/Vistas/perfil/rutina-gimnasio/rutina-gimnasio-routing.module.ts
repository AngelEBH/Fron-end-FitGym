import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaGimnasioPage } from './rutina-gimnasio.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaGimnasioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaGimnasioPageRoutingModule {}
