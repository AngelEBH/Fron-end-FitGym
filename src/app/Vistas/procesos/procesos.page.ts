import { Component, OnInit } from '@angular/core';
import { Article } from './interface/interface';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { GimnasioService } from '../../services/gimnasio.service';
import { TipoRutina } from '../../Model/TipoRutina';

import { Afiliado } from 'src/app/Model/Afiliado';
import { usuario } from 'src/app/Model/usuarios';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.page.html',
  styleUrls: ['./procesos.page.scss'],
})
export class ProcesosPage  {

  procesos: Article[] = [];
  public imagen1 : string;
  public bicep : string;
  public Espalda : string;
  public Pecho : string;
  public Tricep : string;
  public Hombro : string;
  public Pierna : string;
  detalle: TipoRutina[] = [];
  Usuario: usuario[] = [];
  Afiliado : Afiliado[] = [];
  public idUsuario : number;
  public idGimnasio: number;
  //public IdRutina : number;
  
  constructor(private gimnasioService:GimnasioService,
    private storage: Storage,
    private router: Router,) { }

    ionViewWillEnter() {
      this.storage.get('userAuth').then(Data => {
      
        this.idUsuario = Data.id; 
       
        this.GetTipoRutina();
      });
    
  }
  GetTipoRutina(){
  
    this.gimnasioService.getInfoAfiliadoById(this.idUsuario).subscribe((data) => {   
    
      this.Afiliado = data;

      this.gimnasioService.getTipoRutina(this.Afiliado[0].id_Gimnasio).subscribe((datas) => {   
      
      this.detalle = datas;
  });
  });
 
    
  }


}
