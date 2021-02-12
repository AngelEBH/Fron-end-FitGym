import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaHombrosPageRoutingModule } from './rutina-hombros-routing.module';

import { RutinaHombrosPage } from './rutina-hombros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaHombrosPageRoutingModule
  ],
  declarations: [RutinaHombrosPage]
})
export class RutinaHombrosPageModule {}
