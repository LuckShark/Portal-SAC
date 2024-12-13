import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame7CeratoscopiaComponent } from './exame7-ceratoscopia.component';

describe('Exame7CeratoscopiaComponent', () => {
  let component: Exame7CeratoscopiaComponent;
  let fixture: ComponentFixture<Exame7CeratoscopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame7CeratoscopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame7CeratoscopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
