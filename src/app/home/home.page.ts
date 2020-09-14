import { Component, ViewChild, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { IonSlide, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
   @ViewChild('sLidePrincipal') slides: IonSlides;
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
  constructor() {}
  
  login(fLogin: NgForm){
  console.log(fLogin.valid);
  }
  registro(fRegistro:NgForm){
    console.log(fRegistro.valid);
  }
  mostrarRegistro()
  {

  }
  mostrarLogin()
  {

  }
}
