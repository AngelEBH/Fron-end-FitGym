import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCrossGymPage } from './detalle-cross-gym.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCrossGymPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCrossGymPageRoutingModule {}
