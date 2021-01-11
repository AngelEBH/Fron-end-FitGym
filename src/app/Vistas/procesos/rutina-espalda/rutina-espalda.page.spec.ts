import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaEspaldaPage } from './rutina-espalda.page';

describe('RutinaEspaldaPage', () => {
  let component: RutinaEspaldaPage;
  let fixture: ComponentFixture<RutinaEspaldaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaEspaldaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaEspaldaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
