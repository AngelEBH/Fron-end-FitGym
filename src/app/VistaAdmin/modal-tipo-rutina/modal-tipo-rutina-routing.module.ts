import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTipoRutinaPage } from './modal-tipo-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTipoRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTipoRutinaPageRoutingModule {}
