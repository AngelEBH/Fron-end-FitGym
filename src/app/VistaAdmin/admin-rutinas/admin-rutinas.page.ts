import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Afiliado } from 'src/app/Model/Afiliado';
import { TipoRutina } from 'src/app/Model/TipoRutina';
import { usuario } from 'src/app/Model/usuarios';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { GimnasioService } from '../../services/gimnasio.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-rutinas',
  templateUrl: './admin-rutinas.page.html',
  styleUrls: ['./admin-rutinas.page.scss'],
})
export class AdminRutinasPage implements OnInit {
  detalle: TipoRutina[] = [];
  Usuario: usuario[] = [];
  Afiliado : Afiliado[] = [];
  public idUsuario : number;
  public idGimnasio: number;
  IsModify: boolean;
  RutinaId: number;
  FormRutina: FormGroup;

  constructor(private gimnasioService:GimnasioService,
    private storage: Storage,
    private router: Router,
    private cdRef:ChangeDetectorRef,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public formBuilder: FormBuilder) 
    {   this.FormRutina = this.formBuilder.group({
      Rutina_descripcion: new FormControl('', Validators.compose([
      Validators.required,
      ])),
      Rutina_logo: new FormControl('', Validators.compose([
        Validators.required,
        ]))
    }); }

  ngOnInit() {
    this.storage.get('userAuth').then(Data => {
      
      this.idUsuario = Data.id; 
     
      this.GetTipoRutina();
    });
  }

  GetTipoRutina(){
  
    this.gimnasioService.getInfoAfiliadoById(this.idUsuario).subscribe((data) => {   
    
      this.Afiliado = data;

      this.gimnasioService.getTipoRutina(this.Afiliado[0].id_Gimnasio).subscribe((datas) => {   
      
      this.detalle = datas;
  });
  });
 
    
  }

  async addinfo() {
    //const loading = await this.loadingController.create({
    // });
    // await loading.present();
    // this.adminBusinessService.SaveNotices(this.FormNotices.get('notice_descripcion').value, this.empresaId).subscribe(() => {
    //     loading.dismiss();
    //     this.presentAlert('Se ha agregado la noticia exitosamente.');
    //     this.FormNotices.reset();
    //   }, (error) => {
    //     loading.dismiss();
    //     this.presentAlert('Error al guardar la noticia.');
    //   });
  }

}
