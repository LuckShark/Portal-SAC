import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactClinicComponent } from './contact-clinic.component';

describe('ContactClinicComponent', () => {
  let component: ContactClinicComponent;
  let fixture: ComponentFixture<ContactClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactClinicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
