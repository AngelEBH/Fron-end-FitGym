import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearDatosAdminPageRoutingModule } from './crear-datos-admin-routing.module';

import { CrearDatosAdminPage } from './crear-datos-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearDatosAdminPageRoutingModule
  ],
  declarations: [CrearDatosAdminPage]
})
export class CrearDatosAdminPageModule {}
