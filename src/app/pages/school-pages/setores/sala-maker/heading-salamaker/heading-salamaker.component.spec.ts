import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingSalamakerComponent } from './heading-salamaker.component';

describe('HeadingSalamakerComponent', () => {
  let component: HeadingSalamakerComponent;
  let fixture: ComponentFixture<HeadingSalamakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingSalamakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingSalamakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
