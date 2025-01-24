import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingInstitucionalComponent } from './heading-institucional.component';

describe('HeadingInstitucionalComponent', () => {
  let component: HeadingInstitucionalComponent;
  let fixture: ComponentFixture<HeadingInstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingInstitucionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
