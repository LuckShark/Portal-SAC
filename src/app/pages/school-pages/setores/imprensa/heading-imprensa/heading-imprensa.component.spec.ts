import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingImprensaComponent } from './heading-imprensa.component';

describe('HeadingImprensaComponent', () => {
  let component: HeadingImprensaComponent;
  let fixture: ComponentFixture<HeadingImprensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingImprensaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingImprensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
