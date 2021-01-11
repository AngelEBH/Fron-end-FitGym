import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaBicepPage } from './rutina-bicep.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaBicepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaBicepPageRoutingModule {}
