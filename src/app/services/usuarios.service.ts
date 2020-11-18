import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  token: string = null;
  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http: HttpClient, public router: Router, public storage: Storage) { }

  UserLogin(user, password) {
    
   
    return this.http.post(`${environment.API_URL}usuario/authUser`, {UserName: user, Password: password}, {headers : this.headers});
  }
  UserRegister(user,correo ,password) {
      
    return this.http.post(`${environment.API_URL}usuario`, {UserName: user,CorreoElectronico:correo ,Password: password}, {headers : this.headers});
  }
}
                      