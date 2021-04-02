import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearDatosAdminPage } from './crear-datos-admin.page';

describe('CrearDatosAdminPage', () => {
  let component: CrearDatosAdminPage;
  let fixture: ComponentFixture<CrearDatosAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDatosAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearDatosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
