import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingFaqComponent } from './heading-faq.component';

describe('HeadingFaqComponent', () => {
  let component: HeadingFaqComponent;
  let fixture: ComponentFixture<HeadingFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
