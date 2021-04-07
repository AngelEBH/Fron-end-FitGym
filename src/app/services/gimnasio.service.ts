import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Gimnasios} from '../Model/Gimnasios';
import { Storage } from '@ionic/storage';
import { Entrenador } from '../Model/Entrenador';
import { Afiliado } from '../Model/Afiliado';
import { TipoRutina } from '../Model/TipoRutina';

@Injectable({
  providedIn: 'root'
})
export class GimnasioService {
  token: string = null;
  headers = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient, public router: Router, public storage: Storage) { }
  
  getGimnasios()
  {
    
   return  this.http.get<Gimnasios[]>(`${environment.API_URL}gimnasio/GetGimnasios`, {headers:this.headers});
  }

  getByGimnasios(IdGimnasio) {
   
    return this.http.get<Gimnasios[]>(`${environment.API_URL}gimnasio/GetByGimnsasio/${IdGimnasio}`, {headers:this.headers});
  }

  getByEntrenador(IdGimnasio) {
    
    return this.http.get<Entrenador[]>(`${environment.API_URL}gimnasio/GetByEntrenador/${IdGimnasio}`, {headers:this.headers});
  }
  getInfoAfiliadoById(IdGimnasio) {
    
    return this.http.get<Afiliado[]>(`${environment.API_URL}gimnasio/GetInfoAfiliadoById/${IdGimnasio}`, {headers:this.headers});
  }

  getTipoRutina()
  {    
   return  this.http.get<TipoRutina[]>(`${environment.API_URL}gimnasio/GetTipoRutina`, {headers:this.headers});
  }
}
