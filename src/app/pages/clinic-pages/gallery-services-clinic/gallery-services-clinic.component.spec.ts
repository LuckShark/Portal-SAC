import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryServicesClinicComponent } from './gallery-services-clinic.component';

describe('GalleryServicesClinicComponent', () => {
  let component: GalleryServicesClinicComponent;
  let fixture: ComponentFixture<GalleryServicesClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryServicesClinicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryServicesClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
