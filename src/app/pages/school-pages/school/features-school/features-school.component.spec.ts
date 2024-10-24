import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSchoolComponent } from './features-school.component';

describe('FeaturesSchoolComponent', () => {
  let component: FeaturesSchoolComponent;
  let fixture: ComponentFixture<FeaturesSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
