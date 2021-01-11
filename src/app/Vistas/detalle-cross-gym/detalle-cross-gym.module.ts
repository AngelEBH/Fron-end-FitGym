import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCrossGymPageRoutingModule } from './detalle-cross-gym-routing.module';

import { DetalleCrossGymPage } from './detalle-cross-gym.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCrossGymPageRoutingModule
  ],
  declarations: [DetalleCrossGymPage]
})
export class DetalleCrossGymPageModule {}
