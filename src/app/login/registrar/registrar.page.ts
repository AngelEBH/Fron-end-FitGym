import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  

  constructor(
    private navCtrl: NavController
  ) { }


  ngOnInit() {
  }
  async registroClientes() {
   
    this.navCtrl.navigateRoot( '/cliente', { animated: true } );
    
    
  }

  async registroAdministradores() {
   
    this.navCtrl.navigateRoot( '/administrador', { animated: true } );
    
    
  }
}
