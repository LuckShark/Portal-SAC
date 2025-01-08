import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistPagesComponent } from './assist-pages.component';

describe('AssistPagesComponent', () => {
  let component: AssistPagesComponent;
  let fixture: ComponentFixture<AssistPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssistPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
