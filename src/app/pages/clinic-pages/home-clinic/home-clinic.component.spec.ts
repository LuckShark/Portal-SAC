import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClinicComponent } from './home-clinic.component';

describe('HomeClinicComponent', () => {
  let component: HomeClinicComponent;
  let fixture: ComponentFixture<HomeClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeClinicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
