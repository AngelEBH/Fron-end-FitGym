import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaHombrosPage } from './rutina-hombros.page';

describe('RutinaHombrosPage', () => {
  let component: RutinaHombrosPage;
  let fixture: ComponentFixture<RutinaHombrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaHombrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaHombrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
