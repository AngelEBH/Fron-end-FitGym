 import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Gimnasios } from '../Model/Gimnasios';
import { usuario } from '../Model/usuarios';

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

  UserLogin2(user, password) {
    
   
    return this.http.post(`${environment.API_URL}usuario/UserLogin`, {UserName: user, Password: password}, {headers : this.headers});
  }

  UserRegister(user,correo ,password) {
      
    return this.http.post(`${environment.API_URL}usuario`, {UserName: user,CorreoElectronico:correo ,Password: password}, {headers : this.headers});
  }
  AdminRegister(user,correo ,password) {
      
    return this.http.post(`${environment.API_URL}usuario/CrearAdministrador`, {UserName: user,CorreoElectronico:correo ,Password: password}, {headers : this.headers});
  }

  getGimnasios()
  {
    this.http.get<Gimnasios[]>("./assets/config/gimnasios.json");
  }
  
  GetInfoUsuarioPersona(username, email) {
    
    return this.http.get<usuario[]>(`${environment.API_URL}usuario/GetInfoUsuarioPersona/${username}/${email}`, {headers:this.headers});
  }
  
  logout() {
    this.storage.remove('userAuth');
    this.storage.clear();
  }

}
                      