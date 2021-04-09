import {  LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { PerfilPipe } from './Vistas/perfil.pipe';
import { ReactiveFormsModule } from '@angular/forms';
//import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from './Componente/cal-modal/cal-modal.module';
import { registerLocaleData } from '@angular/common';
import localDe from '@angular/common/locales/de';
import {NgModule,ModuleWithProviders} from '@angular/core';
import {Camera} from '@ionic-native/camera/ngx';
registerLocaleData(localDe);


@NgModule({
  declarations: [AppComponent, PerfilPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    NgCalendarModule,
    CalModalPageModule
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //ImagePicker,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
