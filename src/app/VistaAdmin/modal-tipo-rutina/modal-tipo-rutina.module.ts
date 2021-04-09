import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTipoRutinaPageRoutingModule } from './modal-tipo-rutina-routing.module';

import { ModalTipoRutinaPage } from './modal-tipo-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalTipoRutinaPageRoutingModule
  ],
  declarations: [ModalTipoRutinaPage]
})
export class ModalTipoRutinaPageModule {}
