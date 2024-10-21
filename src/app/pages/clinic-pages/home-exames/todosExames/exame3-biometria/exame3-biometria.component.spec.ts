import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame3BiometriaComponent } from './exame3-biometria.component';

describe('Exame3BiometriaComponent', () => {
  let component: Exame3BiometriaComponent;
  let fixture: ComponentFixture<Exame3BiometriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame3BiometriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame3BiometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
