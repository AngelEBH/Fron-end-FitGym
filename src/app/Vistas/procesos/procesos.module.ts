import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesosPageRoutingModule } from './procesos-routing.module';

import { ProcesosPage } from './procesos.page';
import { RutinaBicepPipe } from './rutina-bicep.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesosPageRoutingModule
  ],
  declarations: [ProcesosPage, RutinaBicepPipe]
})
export class ProcesosPageModule {}
