import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Gimnasios } from '../../Model/Gimnasios';
import { GimnasioService } from '../../services/gimnasio.service';
import { Storage } from '@ionic/storage';
import { Data } from '../perfil/proceso-gimnasio/proceso-gimnasio.page';
@Component({
  selector: 'app-gimnasios',
  templateUrl: './gimnasios.page.html',
  styleUrls: ['./gimnasios.page.scss'],
})
export class GimnasiosPage implements OnInit {
  //Gimnasios: Observable<Gimnasios[]>
  detalle: Gimnasios[] = [];
  public userName: string;
  public nombres: string;
  constructor(private usuariosService:UsuariosService,private gimnasioService:GimnasioService,
    private storage: Storage,
    private router: Router,
    ) { }

  ngOnInit() {
    // return  this.Gimnasios = this.usuariosService.getGimnasios();
    this.GetGimnasio();
  }
  GetGimnasio(){
    
    this.storage.get('userAuth').then(Data => {
      
       this.gimnasioService.getGimnasios().subscribe((data) => {          
          this.detalle = data;
       });
    });
  }

}
