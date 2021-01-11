import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../../deposit-modal/deposit-modal.component';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detalle-cross-gym',
  templateUrl: './detalle-cross-gym.page.html',
  styleUrls: ['./detalle-cross-gym.page.scss'],
})
export class DetalleCrossGymPage implements OnInit {

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
 constructor(private modalCtrl: ModalController,private alertController: AlertController) { }
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
    
    message: 'Carlos Mendoza : 99064569 ',
    
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
  }

}
