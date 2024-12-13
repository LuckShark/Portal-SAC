import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame9EcografiaComponent } from './exame9-ecografia.component';

describe('Exame9EcografiaComponent', () => {
  let component: Exame9EcografiaComponent;
  let fixture: ComponentFixture<Exame9EcografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame9EcografiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame9EcografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
