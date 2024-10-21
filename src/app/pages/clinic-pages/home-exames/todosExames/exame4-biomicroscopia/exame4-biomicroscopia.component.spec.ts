import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame4BiomicroscopiaComponent } from './exame4-biomicroscopia.component';

describe('Exame4BiomicroscopiaComponent', () => {
  let component: Exame4BiomicroscopiaComponent;
  let fixture: ComponentFixture<Exame4BiomicroscopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame4BiomicroscopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame4BiomicroscopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
