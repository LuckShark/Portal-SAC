import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia13TumorComponent } from './cirurgia13-tumor.component';

describe('Cirurgia13TumorComponent', () => {
  let component: Cirurgia13TumorComponent;
  let fixture: ComponentFixture<Cirurgia13TumorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia13TumorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia13TumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
