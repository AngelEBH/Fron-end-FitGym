import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesoGimnasioPageRoutingModule } from './proceso-gimnasio-routing.module';

import { ProcesoGimnasioPage } from './proceso-gimnasio.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesoGimnasioPageRoutingModule
  ],
  declarations: [ProcesoGimnasioPage]
})
export class ProcesoGimnasioPageModule {}
