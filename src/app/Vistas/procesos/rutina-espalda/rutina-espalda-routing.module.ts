import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaEspaldaPage } from './rutina-espalda.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaEspaldaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaEspaldaPageRoutingModule {}
