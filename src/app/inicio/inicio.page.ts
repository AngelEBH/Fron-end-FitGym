import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuariosService } from '../services/usuarios.service';
import { usuario } from '../Model/usuarios';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage{
  UsuarioPersona = new Array<usuario>();
  public userName: string;
  public rolesId: number;
  constructor(private menuCtrl: MenuController,private router: Router,private storage: Storage,
    private UsuariosService:UsuariosService,) { }
  ionViewDidEnter(){
    
    this.storage.get('userAuth').then((data) => {
      this.userName = data.userName;     
      this.rolesId = data.rolesId;
      
      if(data.rolesId == 1)
      {
        this.UsuariosService.GetInfoUsuarioPersona(data.userName, data.correoElectronico).subscribe((UsuarioPersona)=>{
          this.UsuarioPersona = UsuarioPersona;
          
        })
      }
    });
  }

  ngOnInit() {
  }
 mostrarMenu()
 {
   this.menuCtrl.open('first');
 }
}
