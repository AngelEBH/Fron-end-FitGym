import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localDe from '@angular/common/locales/de'
registerLocaleData(localDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [PerfilPage],
  providers:
  [
    {provide : LOCALE_ID, useValue:'de-De'}
  ]
})
export class PerfilPageModule {}
