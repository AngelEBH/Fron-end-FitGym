import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ViewEncapsulation } from '@angular/core';

export interface Data {
  movies: string;
}
@Component({
  selector: 'app-detalle-afiliado',
  templateUrl: './detalle-afiliado.page.html',
  styleUrls: ['./detalle-afiliado.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetalleAfiliadoPage implements OnInit {

  tableStyle = 'bootstrap';
  public data: Data;
  public columns: any;
  public rows: any;
  
    constructor(private http: HttpClient) {
      this.columns = [
        { name: 'Nombre'},
        { name: 'Edad'},
        { name: 'Peso'},
        { name: 'Estatura'}
  
      ];
      this.http.get<Data>('../../../assets/afiliado.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.movies;
      });
     }
  
    ngOnInit() {
    }
  
}
