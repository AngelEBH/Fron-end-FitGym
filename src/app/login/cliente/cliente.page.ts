import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { UsuariosService  } from '../../services/usuarios.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})

export class ClientePage {
  loginForm:FormGroup;
  RegisterForm:FormGroup;
  isError: boolean;

  constructor(    private router: Router,
    private UsuariosService:UsuariosService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    public alertController: AlertController
  ) { 
    this.RegisterForm = this.formBuilder.group({
      user: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      correo: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      isadmin: new FormControl('false', Validators.compose([
        Validators.required,
      ]))
    });
  }

  ngOnInit() {
  }
  async presentAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: msj,
    });

    await alert.present();
  }

  async Registrar(){
    const loading = await this.loadingController.create({
    });
    await loading.present();
    this.UsuariosService.UserRegister(
      this.RegisterForm.get('user').value,
      this.RegisterForm.get('correo').value,
      this.RegisterForm.get('password').value).subscribe((data:any) => {
        loading.dismiss();
    
    console.log(data);
  
    this.presentAlert('Datos correctos.')      
      }, (error) => {
        loading.dismiss();
       
      });
  }
}
