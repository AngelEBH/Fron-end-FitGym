import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaPechoPage } from './rutina-pecho.page';

describe('RutinaPechoPage', () => {
  let component: RutinaPechoPage;
  let fixture: ComponentFixture<RutinaPechoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaPechoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaPechoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
