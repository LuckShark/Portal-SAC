import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroFortalecendoComponent } from './intro-fortalecendo.component';

describe('IntroFortalecendoComponent', () => {
  let component: IntroFortalecendoComponent;
  let fixture: ComponentFixture<IntroFortalecendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroFortalecendoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroFortalecendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
