import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { Afiliado } from 'src/app/Model/Afiliado';
import { TipoRutina } from 'src/app/Model/TipoRutina';
import { usuario } from 'src/app/Model/usuarios';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { GimnasioService } from '../../services/gimnasio.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { Gimnasios } from 'src/app/Model/Gimnasios';
declare var window: any;
@Component({
  selector: 'app-modal-tipo-rutina',
  templateUrl: './modal-tipo-rutina.page.html',
  styleUrls: ['./modal-tipo-rutina.page.scss'],
})
export class ModalTipoRutinaPage  {
  detalle: TipoRutina[];
  Usuario: usuario[] = [];
  Afiliado : Afiliado[] = [];
  public idUsuario : number;
  public idGimnasio: number;
  IsModify: boolean;
 public RutinaId: number;
  FormRutina: FormGroup;
  imageResponse: any;
  options: any;
  tempImages: string[] = [];
  GimnasioId: number;
  Gimnasio : Gimnasios[] = [];


  

  constructor(private gimnasioService:GimnasioService,
    private storage: Storage,
    private route: ActivatedRoute,
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
      ]))
    });
    this.RutinaId = this.route.snapshot.queryParams['IdRutina'];     
  }

    ngAfterViewChecked()
    {
      this.cdRef.detectChanges();
    }


  ngOnInit() {
  }
  ionViewDidEnter() {
    this.RutinaId;
    console.log(this.RutinaId);

    this.storage.get('userAuth').then(Data => {      
      this.idUsuario = Data.id; 
     this.getDatos();
          });
 
 
 
   }

   
 
 getDatos()
 {
  if(this.RutinaId > 0)
  {
    this.IsModify = true;
    this.gimnasioService.getTipoRutina2(this.RutinaId).subscribe((datasa) => {      
       
      this.detalle = datasa;
      


  });
  
  }
  else
  {
    this.IsModify = false;
  }
  
 }
   async addinfo() {
     
     const loading = await this.loadingController.create({
     });
     this.GimnasioId = 2;
     await loading.present();
     debugger;
     this.gimnasioService.CrearTipoRutina(this.FormRutina.get('Rutina_descripcion').value,this.GimnasioId).subscribe(() => {
         loading.dismiss();
         this.presentAlert('Se ha agregado El tipo rutina con exito.');
         this.FormRutina.reset();
       }, (error) => {
         loading.dismiss();
         this.presentAlert('Error al guardar los datos.');
       });
   }


   async presentAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: msj
    });

    await alert.present();
  }


   getImages() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(options).then((imageData) => {
     
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

  libreria() {

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.procesarImagen( options );

  }


  procesarImagen( options: CameraOptions ) {

    this.camera.getPicture(options).then( ( imageData ) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

       const img = window.Ionic.WebView.convertFileSrc( imageData );
       console.log(img);
     // this.postsService.subirImagen( imageData );
      this.tempImages.push( img );

     }, (err) => {
      // Handle error
     });
  }

}
