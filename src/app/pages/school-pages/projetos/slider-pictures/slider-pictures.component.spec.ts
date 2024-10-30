import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPicturesComponent } from './slider-pictures.component';

describe('SliderPicturesComponent', () => {
  let component: SliderPicturesComponent;
  let fixture: ComponentFixture<SliderPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
