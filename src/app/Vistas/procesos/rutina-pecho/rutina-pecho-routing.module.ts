import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaPechoPage } from './rutina-pecho.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaPechoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaPechoPageRoutingModule {}
