import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAfiliadoPageRoutingModule } from './detalle-afiliado-routing.module';

import { DetalleAfiliadoPage } from './detalle-afiliado.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAfiliadoPageRoutingModule
  ],
  declarations: [DetalleAfiliadoPage]
})
export class DetalleAfiliadoPageModule {}
