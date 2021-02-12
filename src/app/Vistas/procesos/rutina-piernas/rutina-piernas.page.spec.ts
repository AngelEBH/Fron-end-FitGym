import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaPiernasPage } from './rutina-piernas.page';

describe('RutinaPiernasPage', () => {
  let component: RutinaPiernasPage;
  let fixture: ComponentFixture<RutinaPiernasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaPiernasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaPiernasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
