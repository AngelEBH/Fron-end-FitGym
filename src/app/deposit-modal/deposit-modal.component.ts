import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlertController, IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent  {
  loginForm:FormGroup;
  constructor(private modalCtrl:ModalController,
    private router: Router,   
   
    private storage: Storage,
    public toastController: ToastController,

    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    public alertController: AlertController) { }
  dismissModal(){
    this.modalCtrl.dismiss();
  }
  //ngOnInit() {}

}
