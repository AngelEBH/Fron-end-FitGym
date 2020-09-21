import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleInfinityGynPageRoutingModule } from './detalle-infinity-gyn-routing.module';

import { DetalleInfinityGynPage } from './detalle-infinity-gyn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleInfinityGynPageRoutingModule
  ],
  declarations: [DetalleInfinityGynPage]
})
export class DetalleInfinityGynPageModule {}
