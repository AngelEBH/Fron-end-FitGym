import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPrecioPageRoutingModule } from './crear-precio-routing.module';

import { CrearPrecioPage } from './crear-precio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPrecioPageRoutingModule
  ],
  declarations: [CrearPrecioPage]
})
export class CrearPrecioPageModule {}
