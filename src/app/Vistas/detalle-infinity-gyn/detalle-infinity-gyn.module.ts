import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleInfinityGynPageRoutingModule } from './detalle-infinity-gyn-routing.module';

import { DetalleInfinityGynPage } from './detalle-infinity-gyn.page';
import { DepositModalComponent } from '../../deposit-modal/deposit-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleInfinityGynPageRoutingModule
  ],
  declarations: [DetalleInfinityGynPage, DepositModalComponent],
  entryComponents:[DepositModalComponent]
})
export class DetalleInfinityGynPageModule {}
