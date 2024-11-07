import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMultimenuComponent } from './first-multimenu.component';

describe('FirstMultimenuComponent', () => {
  let component: FirstMultimenuComponent;
  let fixture: ComponentFixture<FirstMultimenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstMultimenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstMultimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
