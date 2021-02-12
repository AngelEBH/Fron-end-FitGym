import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaPiernasPageRoutingModule } from './rutina-piernas-routing.module';

import { RutinaPiernasPage } from './rutina-piernas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaPiernasPageRoutingModule
  ],
  declarations: [RutinaPiernasPage]
})
export class RutinaPiernasPageModule {}
