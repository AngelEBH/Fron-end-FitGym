import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearGimnasioPageRoutingModule } from './crear-gimnasio-routing.module';

import { CrearGimnasioPage } from './crear-gimnasio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearGimnasioPageRoutingModule
  ],
  declarations: [CrearGimnasioPage]
})
export class CrearGimnasioPageModule {}
