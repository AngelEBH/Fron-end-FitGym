import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GimnasioService } from 'src/app/services/gimnasio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Gimnasios } from 'src/app/Model/Gimnasios';
import { Rutinas } from '../../../Model/Rutinas';

@Component({
  selector: 'app-rutina-bicep',
  templateUrl: './rutina-bicep.page.html',
  styleUrls: ['./rutina-bicep.page.scss'],
})
export class RutinaBicepPage implements OnInit {

  public id_TipoRutina : number;
  public nombre: string;
  detalle: Rutinas[] = [];
  constructor(private alertController: AlertController,private gimnasioService:GimnasioService,
    public storage: Storage, private router: Router,
    private route: ActivatedRoute,) {this.id_TipoRutina = this.route.snapshot.queryParams['IdRutina'] }

  ngOnInit() {
    this.getDetalleRutina();
  }

  getDetalleRutina()
  {
    this.gimnasioService.getDetalleRutina(this.id_TipoRutina).subscribe(detalle =>{
        
        return this.detalle = detalle
      
    });
  }
}
