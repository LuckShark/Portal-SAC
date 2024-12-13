import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame20TonometriaComponent } from './exame20-tonometria.component';

describe('Exame20TonometriaComponent', () => {
  let component: Exame20TonometriaComponent;
  let fixture: ComponentFixture<Exame20TonometriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame20TonometriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame20TonometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
