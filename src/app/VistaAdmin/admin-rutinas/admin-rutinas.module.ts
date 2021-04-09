import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRutinasPageRoutingModule } from './admin-rutinas-routing.module';

import { AdminRutinasPage } from './admin-rutinas.page';
//import { ImagePicker } from '@ionic-native/image-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    IonicModule,
    //ImagePicker,
    AdminRutinasPageRoutingModule
  ],
  declarations: [AdminRutinasPage]
})
export class AdminRutinasPageModule {}
