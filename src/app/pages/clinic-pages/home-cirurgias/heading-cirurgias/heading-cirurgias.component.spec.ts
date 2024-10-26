import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingCirurgiasComponent } from './heading-cirurgias.component';

describe('HeadingCirurgiasComponent', () => {
  let component: HeadingCirurgiasComponent;
  let fixture: ComponentFixture<HeadingCirurgiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingCirurgiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingCirurgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
