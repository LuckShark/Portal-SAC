import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesListImagesSchoolComponent } from './features-list-images-school.component';

describe('FeaturesListImagesSchoolComponent', () => {
  let component: FeaturesListImagesSchoolComponent;
  let fixture: ComponentFixture<FeaturesListImagesSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesListImagesSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesListImagesSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
