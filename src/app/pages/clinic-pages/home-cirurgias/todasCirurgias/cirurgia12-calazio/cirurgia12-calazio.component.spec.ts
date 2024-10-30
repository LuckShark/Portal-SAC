import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia12CalazioComponent } from './cirurgia12-calazio.component';

describe('Cirurgia12CalazioComponent', () => {
  let component: Cirurgia12CalazioComponent;
  let fixture: ComponentFixture<Cirurgia12CalazioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia12CalazioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia12CalazioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
