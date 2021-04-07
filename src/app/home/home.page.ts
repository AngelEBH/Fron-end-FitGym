import { Component, ViewChild, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { IonSlide, IonSlides } from '@ionic/angular';
import { UsuariosService } from '../services/usuarios.service';
import { Storage } from '@ionic/storage';
import { usuario } from '../Model/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  UsuarioPersona = new Array<usuario>();
  public userName: string;
  public rolesId: number;
  constructor(private UsuariosService:UsuariosService,
    private router: Router,
    private storage: Storage,
   
  ) {}
  ngOnInit() {
    this.getDatos();
    
  }

  logout(){
    this.UsuariosService.logout();
    this.router.navigate(['/login']);
  }
  getDatos()
  {
    this.storage.get('userAuth').then((data) => {
      this.userName = data.userName;     
      this.rolesId = data.rolesId;
      console.log(data.rolesId);
      if(data.rolesId == 1)
      {
        this.UsuariosService.GetInfoUsuarioPersona(data.userName, data.correoElectronico).subscribe((UsuarioPersona)=>{
          this.UsuarioPersona = UsuarioPersona;
          
        })
      }
    });
  }
}
