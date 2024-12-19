import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySchoolComponent } from './gallery-school.component';

describe('GallerySchoolComponent', () => {
  let component: GallerySchoolComponent;
  let fixture: ComponentFixture<GallerySchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerySchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallerySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
