import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia3PlasticaOcularComponent } from './cirurgia3-plastica-ocular.component';

describe('Cirurgia3PlasticaOcularComponent', () => {
  let component: Cirurgia3PlasticaOcularComponent;
  let fixture: ComponentFixture<Cirurgia3PlasticaOcularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia3PlasticaOcularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia3PlasticaOcularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
