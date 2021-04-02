import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gimnasios } from 'src/app/Model/Gimnasios';
import { GimnasioService } from 'src/app/services/gimnasio.service';

import { Storage } from '@ionic/storage';
import { Entrenador } from 'src/app/Model/Entrenador';
import { Afiliado } from 'src/app/Model/Afiliado';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {
  public IdGimnasio : number;
  public IdUsuario : number;
  public userName: string; 
  public rolesId: number;
  
  
  detalle: Entrenador[] = [];
  detalle2: Afiliado[] = [];
  constructor(private gimnasioService:GimnasioService,
    private storage: Storage,
    private route: ActivatedRoute,
    private router: Router) 
    {// this.IdGimnasio = this.route.snapshot.queryParams['IdGimnasio']
  }

  ngOnInit() {
    this.getDatos();
    this.getByGimnasio();
  }

  getDatos()
  {
    this.storage.get('userAuth').then((data) => { 
      
      this.userName = data.userName;     
      this.rolesId = data.rolesId;
      this.IdUsuario = data.id;
     
      this.getInfoAfiliado();
    });
  }
  getInfoAfiliado()
  {   
    this.gimnasioService.getInfoAfiliadoById(this.IdUsuario).subscribe(detalle2 =>{   
               this.IdGimnasio = detalle2[0].id_Gimnasio;
       return  this.detalle2 = detalle2;
        
    });
  }
  getByGimnasio()
  {  
    this.IdGimnasio =2;
    this.gimnasioService.getByEntrenador(this.IdGimnasio).subscribe(detalle =>{         
        return this.detalle = detalle    
    });
  }


}
