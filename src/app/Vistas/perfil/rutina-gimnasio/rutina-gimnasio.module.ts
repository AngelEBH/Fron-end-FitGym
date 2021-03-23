import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaGimnasioPageRoutingModule } from './rutina-gimnasio-routing.module';

import { RutinaGimnasioPage } from './rutina-gimnasio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaGimnasioPageRoutingModule
  ],
  declarations: [RutinaGimnasioPage]
})
export class RutinaGimnasioPageModule {}
