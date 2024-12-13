import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame10FotocoagulacaoComponent } from './exame10-fotocoagulacao.component';

describe('Exame10FotocoagulacaoComponent', () => {
  let component: Exame10FotocoagulacaoComponent;
  let fixture: ComponentFixture<Exame10FotocoagulacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame10FotocoagulacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame10FotocoagulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
