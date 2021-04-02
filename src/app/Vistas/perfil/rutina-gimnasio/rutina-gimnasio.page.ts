import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-rutina-gimnasio',
  templateUrl: './rutina-gimnasio.page.html',
  styleUrls: ['./rutina-gimnasio.page.scss'],
})
export class RutinaGimnasioPage implements OnInit {

  eventSource =[];
  viewTitle: string;
  type: 'string';

  calendar={
    mode: 'month',
    currentDate: new Date()
  };
 
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor() { }

  ngOnInit() {
  }

  next(){
    this.myCal.slideNext();
  }
  back(){
    this.myCal.slidePrev();
  }
  onViewTitkeCahnged(title){
    this.viewTitle=title;
  }

}
