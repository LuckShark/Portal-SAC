import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSaudeComponent } from './footer-saude.component';

describe('FooterSaudeComponent', () => {
  let component: FooterSaudeComponent;
  let fixture: ComponentFixture<FooterSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSaudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
