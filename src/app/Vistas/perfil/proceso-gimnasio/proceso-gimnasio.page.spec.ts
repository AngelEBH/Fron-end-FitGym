import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcesoGimnasioPage } from './proceso-gimnasio.page';

describe('ProcesoGimnasioPage', () => {
  let component: ProcesoGimnasioPage;
  let fixture: ComponentFixture<ProcesoGimnasioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoGimnasioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcesoGimnasioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
