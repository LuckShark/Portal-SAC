import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame13MapeamentoComponent } from './exame13-mapeamento.component';

describe('Exame13MapeamentoComponent', () => {
  let component: Exame13MapeamentoComponent;
  let fixture: ComponentFixture<Exame13MapeamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame13MapeamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame13MapeamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
