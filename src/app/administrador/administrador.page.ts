import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { UsuariosService  } from '../services/usuarios.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage{
  RegisterForm:FormGroup;
  isError: boolean;

  constructor(
    private router: Router,
    private UsuariosService:UsuariosService,
   
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
    this.UsuariosService.AdminRegister(
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
