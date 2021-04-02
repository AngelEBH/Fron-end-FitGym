import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { usuario } from './Model/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  UsuarioPersona = new Array<usuario>();
  public userName: string;
  public rolesId: number;
  constructor(
    private platform: Platform,
    private UsuariosService:UsuariosService,
    private splashScreen: SplashScreen,
    private router: Router,
    private storage: Storage,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  logout(){
    this.UsuariosService.logout();
    this.router.navigate(['/login']);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getDatos();
    });
  }
  getDatos()
  {
    this.storage.get('userAuth').then((data) => {
      this.userName = data.userName;     
      this.rolesId = data.rolesId;
      console.log(data.rolesId);
      if(data.rolesId == 1)
      {
        this.UsuariosService.GetInfoUsuarioPersona(data.userName, data.correoElectronico).subscribe((UsuarioPersona)=>{
          this.UsuarioPersona = UsuarioPersona;
          
        })
      }
    });
  }
}
