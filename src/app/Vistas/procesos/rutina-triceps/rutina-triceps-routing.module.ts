import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaTricepsPage } from './rutina-triceps.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaTricepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaTricepsPageRoutingModule {}
