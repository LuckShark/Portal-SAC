import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame17PaquimetriaComponent } from './exame17-paquimetria.component';

describe('Exame17PaquimetriaComponent', () => {
  let component: Exame17PaquimetriaComponent;
  let fixture: ComponentFixture<Exame17PaquimetriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame17PaquimetriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame17PaquimetriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
