import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallePalermoGymPage } from './detalle-palermo-gym.page';

describe('DetallePalermoGymPage', () => {
  let component: DetallePalermoGymPage;
  let fixture: ComponentFixture<DetallePalermoGymPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePalermoGymPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePalermoGymPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
