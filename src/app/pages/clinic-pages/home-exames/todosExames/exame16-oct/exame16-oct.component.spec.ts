import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame16OctComponent } from './exame16-oct.component';

describe('Exame16OctComponent', () => {
  let component: Exame16OctComponent;
  let fixture: ComponentFixture<Exame16OctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame16OctComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame16OctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
