import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../../deposit-modal/deposit-modal.component';
import { AlertController } from '@ionic/angular';

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
      
      message: 'luis inestrosa : 98554567 ',
      
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

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
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
