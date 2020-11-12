import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeolocaizacionPage } from './geolocaizacion.page';

describe('GeolocaizacionPage', () => {
  let component: GeolocaizacionPage;
  let fixture: ComponentFixture<GeolocaizacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocaizacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeolocaizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
