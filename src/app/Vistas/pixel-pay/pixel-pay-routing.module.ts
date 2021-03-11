import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PixelPayPage } from './pixel-pay.page';

const routes: Routes = [
  {
    path: '',
    component: PixelPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PixelPayPageRoutingModule {}
