import { compileFactoryFunction } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ViewEncapsulation } from '@angular/core';

import { HttpClient } from '@angular/common/http';
export interface Data {
  movies: string;
}
@Component({
  selector: 'app-proceso-gimnasio',
  templateUrl: './proceso-gimnasio.page.html',
  styleUrls: ['./proceso-gimnasio.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProcesoGimnasioPage implements OnInit {
tableStyle = 'bootstrap';
public data: Data;
public columns: any;
public rows: any;

  constructor(private http: HttpClient) {
    this.columns = [
      { name: 'lunes' },
      { name: 'martes' },
      { name: 'miercoles' },
      { name: 'miercoles' },
      { name: 'miercoles' },
      { name: 'miercoles' }

    ];
    this.http.get<Data>('../../../assets/movies.json')
    .subscribe((res) => {
      console.log(res)
      this.rows = res.movies;
    });
   }

  ngOnInit() {
  }

}
