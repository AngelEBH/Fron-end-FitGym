import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuariosService } from '../services/usuarios.service';
import { usuario } from '../Model/usuarios';
//import { debug } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm:FormGroup;
  RegisterForm:FormGroup;
  UsuarioPersona = new Array<usuario>();
  isError: boolean;
  @ViewChild('sLidePrincipal') slides: IonSlides;
 
  constructor(
    private router: Router,
    private UsuariosService:UsuariosService,
   
    private storage: Storage,
    public toastController: ToastController,

    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    public alertController: AlertController
  ) {
    this.loginForm = this.formBuilder.group({
      user: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      isadmin: new FormControl('false', Validators.compose([
        Validators.required,
      ]))
    });
    
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
  


  async login(){
   
    
    const loading = await this.loadingController.create({
    });
    await loading.present();
    this.UsuariosService.UserLogin2(
      this.loginForm.get('user').value,
      this.loginForm.get('password').value).subscribe((user:usuario) => {
        loading.dismiss();
    
        if(user.rolesId == 2)
        {
          this.UsuariosService.GetInfoUsuarioPersona(user.userName, user.correoElectronico).subscribe((usuariopersona) => {
            loading.dismiss();
            
            this.UsuarioPersona = usuariopersona;
            this.storage.set('userAuth', user);
            this.router.navigate(['/inicio']);

          });
        }
        else
        {
          this.storage.set('userAuth', user);
          this.router.navigate(['/inicio']);
        }
      }, (error) => {
        loading.dismiss();
        this.presentAlert('Datos incorrectos.')
      });

    }

    async presentAlert(msj) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: msj,
      });
  
      await alert.present();
    }
    
    async SuccesAlert(msj) {
      const alert = await this.alertController.create({
        header: 'Succes',
        message: msj
      });
  
      await alert.present();
    }
    
}
