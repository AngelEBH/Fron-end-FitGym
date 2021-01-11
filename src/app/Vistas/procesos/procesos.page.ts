import { Component, OnInit } from '@angular/core';
import { Article } from './interface/interface';


@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.page.html',
  styleUrls: ['./procesos.page.scss'],
})
export class ProcesosPage implements OnInit {

  procesos: Article[] = [];
  constructor() { }

  ngOnInit() {
  }

}
