import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaBicepPageRoutingModule } from './rutina-bicep-routing.module';

import { RutinaBicepPage } from './rutina-bicep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaBicepPageRoutingModule
  ],
  declarations: [RutinaBicepPage]
})
export class RutinaBicepPageModule {}
