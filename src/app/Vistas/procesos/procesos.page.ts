import { Component, OnInit } from '@angular/core';
import { Article } from './interface/interface';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { GimnasioService } from '../../services/gimnasio.service';
import { TipoRutina } from '../../Model/TipoRutina';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.page.html',
  styleUrls: ['./procesos.page.scss'],
})
export class ProcesosPage implements OnInit {

  procesos: Article[] = [];
  public imagen1 : string;
  public bicep : string;
  public Espalda : string;
  public Pecho : string;
  public Tricep : string;
  public Hombro : string;
  public Pierna : string;
  detalle: TipoRutina[] = [];
  constructor(private gimnasioService:GimnasioService,
    private storage: Storage,
    private router: Router,) { }

  ngOnInit() {
    this.GetTipoRutina();
  }
  GetTipoRutina(){
    
    this.storage.get('userAuth').then(Data => {
      
       this.gimnasioService.getTipoRutina().subscribe((data) => {   
                this.bicep = data[0].descripcion;
                this.imagen1 = data[0].logo;
                this.Espalda = data[1].descripcion;
                this.Pecho = data[2].descripcion;
                this.Tricep = data[3].descripcion;
                this.Hombro = data[4].descripcion;
                this.Pierna = data[5].descripcion;
          this.detalle = data;
       });
    });
  }


}
