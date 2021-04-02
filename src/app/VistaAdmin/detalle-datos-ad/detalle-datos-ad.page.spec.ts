import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleDatosAdPage } from './detalle-datos-ad.page';

describe('DetalleDatosAdPage', () => {
  let component: DetalleDatosAdPage;
  let fixture: ComponentFixture<DetalleDatosAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDatosAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleDatosAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
