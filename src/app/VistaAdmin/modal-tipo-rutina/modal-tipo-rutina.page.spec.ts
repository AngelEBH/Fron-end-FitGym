import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalTipoRutinaPage } from './modal-tipo-rutina.page';

describe('ModalTipoRutinaPage', () => {
  let component: ModalTipoRutinaPage;
  let fixture: ComponentFixture<ModalTipoRutinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTipoRutinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTipoRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
