import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminRutinasPage } from './admin-rutinas.page';

describe('AdminRutinasPage', () => {
  let component: AdminRutinasPage;
  let fixture: ComponentFixture<AdminRutinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRutinasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminRutinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
