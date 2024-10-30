import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia2RefrativaComponent } from './cirurgia2-refrativa.component';

describe('Cirurgia2RefrativaComponent', () => {
  let component: Cirurgia2RefrativaComponent;
  let fixture: ComponentFixture<Cirurgia2RefrativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia2RefrativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia2RefrativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
