import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearGimnasioPage } from './crear-gimnasio.page';

describe('CrearGimnasioPage', () => {
  let component: CrearGimnasioPage;
  let fixture: ComponentFixture<CrearGimnasioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearGimnasioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearGimnasioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
