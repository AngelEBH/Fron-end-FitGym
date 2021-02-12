import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaTricepsPage } from './rutina-triceps.page';

describe('RutinaTricepsPage', () => {
  let component: RutinaTricepsPage;
  let fixture: ComponentFixture<RutinaTricepsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaTricepsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaTricepsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
