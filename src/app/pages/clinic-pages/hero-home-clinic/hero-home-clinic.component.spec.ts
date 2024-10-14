import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHomeClinicComponent } from './hero-home-clinic.component';

describe('HeroHomeClinicComponent', () => {
  let component: HeroHomeClinicComponent;
  let fixture: ComponentFixture<HeroHomeClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroHomeClinicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroHomeClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
