import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaTricepsPageRoutingModule } from './rutina-triceps-routing.module';

import { RutinaTricepsPage } from './rutina-triceps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaTricepsPageRoutingModule
  ],
  declarations: [RutinaTricepsPage]
})
export class RutinaTricepsPageModule {}
