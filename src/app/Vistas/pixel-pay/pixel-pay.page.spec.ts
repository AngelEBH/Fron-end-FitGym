import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PixelPayPage } from './pixel-pay.page';

describe('PixelPayPage', () => {
  let component: PixelPayPage;
  let fixture: ComponentFixture<PixelPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PixelPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
