import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Gimnasios} from '../Model/Gimnasios';
import { Storage } from '@ionic/storage';
import { Entrenador } from '../Model/Entrenador';
import { Afiliado } from '../Model/Afiliado';
import { TipoRutina } from '../Model/TipoRutina';
import { Rutinas } from '../Model/Rutinas';

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

  getTipoRutina(IdGimnasio)
  {    
   return  this.http.get<TipoRutina[]>(`${environment.API_URL}gimnasio/GetTipoRutina/${IdGimnasio}`, {headers:this.headers});
  }
  getDetalleRutina(IdRutina)
  {    
   return  this.http.get<Rutinas[]>(`${environment.API_URL}gimnasio/GetDetalleRutina/${IdRutina}`, {headers:this.headers});
  }

  getByDuenoGimnasios(IdUsuario) {
   
    return this.http.get<Gimnasios[]>(`${environment.API_URL}gimnasio/GetByDuenoGimnsasio/${IdUsuario}`, {headers:this.headers});
  }
  getTipoRutina2(IdRutina)
  {    
   return  this.http.get<TipoRutina[]>(`${environment.API_URL}gimnasio/GetTipoRutina2/${IdRutina}`, {headers:this.headers});
  }

  CrearTipoRutina(descripcion,GimnasioId)
  {    
    debugger;
   return  this.http.post<TipoRutina[]>(`${environment.API_URL}gimnasio/CrearTipoRutina`, {Descripcion: descripcion, Id_Gimnasio: GimnasioId}, {headers:this.headers});
  }
  DeleteTipoRutina(IdRutina)
  {    
   return  this.http.delete<TipoRutina[]>(`${environment.API_URL}gimnasio/GetTipoRutina/${IdRutina}`, {headers:this.headers});
  }

  UpdateTipoRutina(descripcion ,IdRutina)
  {    
   return  this.http.put<TipoRutina[]>(`${environment.API_URL}gimnasio/UpdateTipoRutina/${IdRutina}`, {headers:this.headers});
  }
}
