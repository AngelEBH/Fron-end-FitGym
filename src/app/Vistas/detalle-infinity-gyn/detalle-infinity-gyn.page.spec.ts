import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleInfinityGynPage } from './detalle-infinity-gyn.page';

describe('DetalleInfinityGynPage', () => {
  let component: DetalleInfinityGynPage;
  let fixture: ComponentFixture<DetalleInfinityGynPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInfinityGynPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleInfinityGynPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
