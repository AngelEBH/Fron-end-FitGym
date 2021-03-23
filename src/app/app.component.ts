import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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
    });
  }
}
