import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearPrecioPage } from './crear-precio.page';

describe('CrearPrecioPage', () => {
  let component: CrearPrecioPage;
  let fixture: ComponentFixture<CrearPrecioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPrecioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPrecioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
