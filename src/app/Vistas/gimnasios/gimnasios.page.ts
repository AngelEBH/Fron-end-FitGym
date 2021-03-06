import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Gimnasios } from '../../Model/Gimnasios';

@Component({
  selector: 'app-gimnasios',
  templateUrl: './gimnasios.page.html',
  styleUrls: ['./gimnasios.page.scss'],
})
export class GimnasiosPage implements OnInit {
  Gimnasios: Observable<Gimnasios[]>

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit() {
    // return  this.Gimnasios = this.usuariosService.getGimnasios();
  }

}
