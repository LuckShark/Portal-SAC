import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia9InjecaoComponent } from './cirurgia9-injecao.component';

describe('Cirurgia9InjecaoComponent', () => {
  let component: Cirurgia9InjecaoComponent;
  let fixture: ComponentFixture<Cirurgia9InjecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia9InjecaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia9InjecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
