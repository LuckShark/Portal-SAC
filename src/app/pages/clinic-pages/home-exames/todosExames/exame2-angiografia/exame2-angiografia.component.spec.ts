import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame2AngiografiaComponent } from './exame2-angiografia.component';

describe('Exame2AngiografiaComponent', () => {
  let component: Exame2AngiografiaComponent;
  let fixture: ComponentFixture<Exame2AngiografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame2AngiografiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame2AngiografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
