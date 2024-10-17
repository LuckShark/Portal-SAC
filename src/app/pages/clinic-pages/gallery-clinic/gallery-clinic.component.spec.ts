import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryClinicComponent } from './gallery-clinic.component';

describe('GalleryClinicComponent', () => {
  let component: GalleryClinicComponent;
  let fixture: ComponentFixture<GalleryClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryClinicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
