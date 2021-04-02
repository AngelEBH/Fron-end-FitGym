import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleDatosAdPageRoutingModule } from './detalle-datos-ad-routing.module';

import { DetalleDatosAdPage } from './detalle-datos-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleDatosAdPageRoutingModule
  ],
  declarations: [DetalleDatosAdPage]
})
export class DetalleDatosAdPageModule {}
