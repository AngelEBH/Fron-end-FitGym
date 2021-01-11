import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePalermoGymPageRoutingModule } from './detalle-palermo-gym-routing.module';

import { DetallePalermoGymPage } from './detalle-palermo-gym.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePalermoGymPageRoutingModule
  ],
  declarations: [DetallePalermoGymPage]
})
export class DetallePalermoGymPageModule {}
