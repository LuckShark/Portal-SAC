import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAssistComponent } from './header-assist.component';

describe('HeaderAssistComponent', () => {
  let component: HeaderAssistComponent;
  let fixture: ComponentFixture<HeaderAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAssistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
