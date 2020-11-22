import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../../deposit-modal/deposit-modal.component';

@Component({
  selector: 'app-detalle-infinity-gyn',
  templateUrl: './detalle-infinity-gyn.page.html',
  styleUrls: ['./detalle-infinity-gyn.page.scss'],
})
export class DetalleInfinityGynPage implements OnInit {
 
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
  constructor(private modalCtrl: ModalController) { }
   async openModal(){
    const modal = await this.modalCtrl.create({
         component: DepositModalComponent
     });

     await modal.present();
  }
  ngOnInit() {
  }

}
