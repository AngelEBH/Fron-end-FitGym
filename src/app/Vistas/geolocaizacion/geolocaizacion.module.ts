import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocaizacionPageRoutingModule } from './geolocaizacion-routing.module';

import { GeolocaizacionPage } from './geolocaizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocaizacionPageRoutingModule
  ],
  declarations: [GeolocaizacionPage]
})
export class GeolocaizacionPageModule {}
