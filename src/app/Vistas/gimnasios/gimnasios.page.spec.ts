import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GimnasiosPage } from './gimnasios.page';

describe('GimnasiosPage', () => {
  let component: GimnasiosPage;
  let fixture: ComponentFixture<GimnasiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GimnasiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GimnasiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
