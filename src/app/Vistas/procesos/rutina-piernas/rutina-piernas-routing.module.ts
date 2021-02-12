import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaPiernasPage } from './rutina-piernas.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaPiernasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaPiernasPageRoutingModule {}
