import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionCiclosPage } from './configuracion-ciclos.page';

describe('ConfiguracionCiclosPage', () => {
  let component: ConfiguracionCiclosPage;
  let fixture: ComponentFixture<ConfiguracionCiclosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionCiclosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionCiclosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
