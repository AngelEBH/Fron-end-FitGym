import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaEspaldaPageRoutingModule } from './rutina-espalda-routing.module';

import { RutinaEspaldaPage } from './rutina-espalda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaEspaldaPageRoutingModule
  ],
  declarations: [RutinaEspaldaPage]
})
export class RutinaEspaldaPageModule {}
