import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaHombrosPage } from './rutina-hombros.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaHombrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaHombrosPageRoutingModule {}
