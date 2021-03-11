import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private UsuariosService:UsuariosService, private Router:Router, public storage: Storage){}
 
 /* canActivate(route: ActivatedRouteSnapshot)
  {
    return  this.storage.get('userAuth').then
    if(this.UsuariosService) {
        return true;
    }else {
          this.Router.navigate(['/login']);
          return false;
    }
  }*/
  async canActivate(route: ActivatedRouteSnapshot) {
    return this.storage.get('userAuth').then((data) => {
      if (!data) {
        this.Router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });
  }
}
