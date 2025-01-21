import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaAtendimentoComponent } from './galeria-atendimento.component';

describe('GaleriaAtendimentoComponent', () => {
  let component: GaleriaAtendimentoComponent;
  let fixture: ComponentFixture<GaleriaAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriaAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
