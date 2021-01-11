import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePalermoGymPage } from './detalle-palermo-gym.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePalermoGymPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePalermoGymPageRoutingModule {}
