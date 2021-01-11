import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaPechoPageRoutingModule } from './rutina-pecho-routing.module';

import { RutinaPechoPage } from './rutina-pecho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaPechoPageRoutingModule
  ],
  declarations: [RutinaPechoPage]
})
export class RutinaPechoPageModule {}
