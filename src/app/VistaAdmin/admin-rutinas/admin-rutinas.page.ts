import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Afiliado } from 'src/app/Model/Afiliado';
import { TipoRutina } from 'src/app/Model/TipoRutina';
import { usuario } from 'src/app/Model/usuarios';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { GimnasioService } from '../../services/gimnasio.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { Gimnasios } from 'src/app/Model/Gimnasios';

declare var window: any;
@Component({
  selector: 'app-admin-rutinas',
  templateUrl: './admin-rutinas.page.html',
  styleUrls: ['./admin-rutinas.page.scss'],
})
export class AdminRutinasPage  {
  detalle: TipoRutina[];
  Usuario: usuario[] = [];
  Afiliado : Afiliado[] = [];
  public idUsuario : number;
  public idGimnasio: number;
  IsModify: boolean;
  RutinaId: number;
  FormRutina: FormGroup;
  imageResponse: any;
  options: any;
  tempImages: string[] = [];
  GimnasioId: number;
  Gimnasio : Gimnasios[] = [];


  

  constructor(private gimnasioService:GimnasioService,
    private storage: Storage,
    private router: Router,
    private cdRef:ChangeDetectorRef,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public formBuilder: FormBuilder,
    private camera: Camera
    //private imagePicker: ImagePicker
    ) 
    {   this.FormRutina = this.formBuilder.group({
      Rutina_descripcion: new FormControl('', Validators.compose([
      Validators.required,
      ])),
      Rutina_logo: new FormControl('', Validators.compose([
        Validators.required,
        ]))
    }); }

    ngAfterViewChecked()
    {
      this.cdRef.detectChanges();
    }

    ionViewDidEnter() {

   this.storage.get('userAuth').then(Data => {      
     this.idUsuario = Data.id; 
    this.getDatos();
         });



  }

getDatos()
{
  this.gimnasioService.getByDuenoGimnasios(this.idUsuario).subscribe((datas) => {        
    this.Gimnasio = datas;
     this.idGimnasio = this.Gimnasio[0].id_Gimnasio;

    this.gimnasioService.getTipoRutina(this.Gimnasio[0].id_Gimnasio).subscribe((datasa) => {       
      this.detalle = datasa;
      

  });
    });
}
 

  addItem(){
    this.router.navigate(['/modal-tipo-rutina']);
  }
  goEditInfo(event){
    this.router.navigate(['/modal-tipo-rutina'], {queryParams: {IdRutina: event}});
  }
  removeItem(event){
   
  }

  

}
