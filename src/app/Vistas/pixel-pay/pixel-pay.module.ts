import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PixelPayPageRoutingModule } from './pixel-pay-routing.module';

import { PixelPayPage } from './pixel-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PixelPayPageRoutingModule
  ],
  declarations: [PixelPayPage]
})
export class PixelPayPageModule {}
