import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-geolocaizacion',
  templateUrl: './geolocaizacion.page.html',
  styleUrls: ['./geolocaizacion.page.scss'],
})
export class GeolocaizacionPage  {
   map: Mapboxgl.Map;
  constructor() { }

  ionViewDidEnter() {
    Mapboxgl.accessToken = environment.MaboxKey;
    this.map  = new Mapboxgl.Map({
    container: 'mapa-mapbox', // container id
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-87.8000000,15.4000000], // starting position
    zoom: 13 // starting zoom
    });

    this.map.resize();
    this.map.addControl(new Mapboxgl.NavigationControl());
    
    this.CrearMArker(-87.8049188,15.401511, 'InfinityGym');
    this.CrearMArker(-87.8076121,15.3992149, 'Karento');
    this.CrearMArker(-87.8124072,15.402956, 'Gimnasio Municipal');
    this.CrearMArker(-87.8110777,15.3879411, 'Gym Atletico Palermo');
    this.CrearMArker(-87.8007857,15.3853649, 'Gym Atletas Progreseños');
    this.CrearMArker(-87.8095915,15.3795925, 'Cross Gym');
    this.CrearMArker(-87.8163024,15.4030609, 'Muscle Gym');
    this.CrearMArker(-87.8046821,15.4017952, 'Nueva Imagen');
  }

  CrearMArker(Lng:number,Lat:number, description: string)
  {
    var popup = new Mapboxgl.Popup()
    .setText(description)
    .addTo(this.map);


    const marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([Lng,Lat])
      .addTo(this.map)
      .setPopup(popup);
  }

}
