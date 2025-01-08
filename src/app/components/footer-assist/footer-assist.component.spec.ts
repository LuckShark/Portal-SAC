import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAssistComponent } from './footer-assist.component';

describe('FooterAssistComponent', () => {
  let component: FooterAssistComponent;
  let fixture: ComponentFixture<FooterAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterAssistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
