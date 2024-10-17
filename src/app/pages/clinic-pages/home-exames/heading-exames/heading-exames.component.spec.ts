import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingExamesComponent } from './heading-exames.component';

describe('HeadingExamesComponent', () => {
  let component: HeadingExamesComponent;
  let fixture: ComponentFixture<HeadingExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingExamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
