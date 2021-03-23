import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaGimnasioPage } from './rutina-gimnasio.page';

describe('RutinaGimnasioPage', () => {
  let component: RutinaGimnasioPage;
  let fixture: ComponentFixture<RutinaGimnasioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaGimnasioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaGimnasioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
