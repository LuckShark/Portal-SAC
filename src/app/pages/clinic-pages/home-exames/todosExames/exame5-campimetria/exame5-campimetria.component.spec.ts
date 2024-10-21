import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame5CampimetriaComponent } from './exame5-campimetria.component';

describe('Exame5CampimetriaComponent', () => {
  let component: Exame5CampimetriaComponent;
  let fixture: ComponentFixture<Exame5CampimetriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame5CampimetriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame5CampimetriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
