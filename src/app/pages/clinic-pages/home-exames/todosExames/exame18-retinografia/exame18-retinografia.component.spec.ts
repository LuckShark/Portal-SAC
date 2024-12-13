import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame18RetinografiaComponent } from './exame18-retinografia.component';

describe('Exame18RetinografiaComponent', () => {
  let component: Exame18RetinografiaComponent;
  let fixture: ComponentFixture<Exame18RetinografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame18RetinografiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame18RetinografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
