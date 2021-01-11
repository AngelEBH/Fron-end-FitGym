import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaBicepPage } from './rutina-bicep.page';

describe('RutinaBicepPage', () => {
  let component: RutinaBicepPage;
  let fixture: ComponentFixture<RutinaBicepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaBicepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaBicepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
