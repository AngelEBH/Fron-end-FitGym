import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm:FormGroup;
  RegisterForm:FormGroup;
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
  
  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

ionViewDidEnter() {
  this.slides.lockSwipes( true );
}

  ngOnInit() {
    
  }
  

  mostrarRegisto() {
    this.slides.lockSwipes( false );
    this.slides.slideTo(1);
    this.slides.lockSwipes( true );
  }

  mostrarLogin() {
    this.slides.lockSwipes( false );
    this.slides.slideTo(0);
    this.slides.lockSwipes( true );
  }

 

  async login(){
   
    
    const loading = await this.loadingController.create({
    });
    await loading.present();
    this.UsuariosService.UserLogin(
      this.loginForm.get('user').value,
      this.loginForm.get('password').value).subscribe((data:any) => {
        loading.dismiss();
    
    console.log(data);
  
    this.presentAlert('Datos correctos.')
    this.router.navigate(['/inicio']);
      }, (error) => {
        loading.dismiss();
       
      });
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
