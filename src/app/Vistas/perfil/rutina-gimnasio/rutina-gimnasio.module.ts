import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaGimnasioPageRoutingModule } from './rutina-gimnasio-routing.module';

import { RutinaGimnasioPage } from './rutina-gimnasio.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localDe from '@angular/common/locales/de'
registerLocaleData(localDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaGimnasioPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [RutinaGimnasioPage],
  providers:
  [
    {provide : LOCALE_ID, useValue:'de-De'}
  ]
})
export class RutinaGimnasioPageModule {}
