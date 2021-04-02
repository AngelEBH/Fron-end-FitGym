import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../../deposit-modal/deposit-modal.component';
import { AlertController } from '@ionic/angular';
import { Gimnasios } from 'src/app/Model/Gimnasios';
import { Storage } from '@ionic/storage';
import { GimnasioService } from 'src/app/services/gimnasio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-infinity-gyn',
  templateUrl: './detalle-infinity-gyn.page.html',
  styleUrls: ['./detalle-infinity-gyn.page.scss'],
})
export class DetalleInfinityGynPage implements OnInit {
  public IdGimnasio :  number;
  public nombre: string;
  public telefono: string;
  detalle: Gimnasios[] = [];
  accounts = [
     {
       name: "Angel",
       balance: 1000
     },
     {
      name: "Eduardo",
      balance: 1200
     }
  ];
  constructor(private modalCtrl: ModalController,private alertController: AlertController,private gimnasioService:GimnasioService,
    public storage: Storage, private router: Router,
    private route: ActivatedRoute,
    ) { this.IdGimnasio = this.route.snapshot.queryParams['IdGimnasio'] }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Horario',
      subHeader: 'lunes a sabados',
      message: 'lunes de 6:00am a 9:00pm. sabados de 6:00am a 5:00pm. ',
      
      buttons: ['OK']
    });

    await alert.present();
  }
  async Contactos() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contactos',
      
      message:  this.nombre +'-'+ this.telefono,
      
      buttons: ['OK']
    });

    await alert.present();
  }

  async Membresia() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Costo Membresia',
      
      message: ' 600lps ',
      
      buttons: ['OK']
    });

    await alert.present();
  }


   async openModal(){
    const modal = await this.modalCtrl.create({
         component: DepositModalComponent
     });

     await modal.present();
  }
  ngOnInit() {
    this.getByGimnasio();
  }

  getByGimnasio()
  {
    
    this.gimnasioService.getByGimnasios(this.IdGimnasio).subscribe(detalle =>{
          this.nombre = detalle[0].dueño;
          this.telefono = detalle[0].contacto;
          
        return this.detalle = detalle
      
    });
  }

}
