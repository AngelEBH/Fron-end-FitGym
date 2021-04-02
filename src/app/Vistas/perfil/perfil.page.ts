import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { usuario } from 'src/app/Model/usuarios';
import { UsuariosService } from '../../services/usuarios.service'

import { GimnasioService } from '../../services/gimnasio.service';
import { Afiliado } from 'src/app/Model/Afiliado';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public userName: string;
 
  public nombres: string;
  public rolesId: number;
  public IdUsuario: number;
  UsuarioPersona = new Array<usuario>();
  detalle : Afiliado [] = [];

  constructor(private alertController: AlertController,private storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService:UsuariosService,
    private gimnasioService:GimnasioService) { }

  ngOnInit() {
    this.getDatos();
    
  }

  getDatos()
  {
    this.storage.get('userAuth').then((data) => { 
      
      this.userName = data.userName;     
      this.rolesId = data.rolesId;
      this.IdUsuario = data.id;
      
      if(data.rolesId == 1)
      {
        this.usuariosService.GetInfoUsuarioPersona(data.userName, data.correoElectronico).subscribe((UsuarioPersona)=>{
          this.UsuarioPersona = UsuarioPersona;
       
        })
      }
      this.getInfoAfiliado();
    });
  }

  getInfoAfiliado()
  {    
  
    this.gimnasioService.getInfoAfiliadoById(this.IdUsuario).subscribe(detalle =>{   
               this.nombres = detalle[0].nombre;
       return  this.detalle = detalle;
        
    });
  }
  async Entrenador() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Entrenador',
      
      message: 'Almilcar : 98554567 ',
      
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

}
