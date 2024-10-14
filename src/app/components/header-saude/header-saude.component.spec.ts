import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSaudeComponent } from './header-saude.component';

describe('HeaderSaudeComponent', () => {
  let component: HeaderSaudeComponent;
  let fixture: ComponentFixture<HeaderSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSaudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
