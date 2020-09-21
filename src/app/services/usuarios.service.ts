import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  token: string = null;

  constructor(private http: HttpClient,
               private storage: Storage) { }

login(email: string, password : string){ 
 const data= { email:email,password:password};
}
}
                      