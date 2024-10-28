import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramClinicComponent } from './instagram-clinic.component';

describe('InstagramClinicComponent', () => {
  let component: InstagramClinicComponent;
  let fixture: ComponentFixture<InstagramClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramClinicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstagramClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
