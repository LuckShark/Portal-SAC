import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistHeroHomeComponent } from './assist-hero-home.component';

describe('AssistHeroHomeComponent', () => {
  let component: AssistHeroHomeComponent;
  let fixture: ComponentFixture<AssistHeroHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistHeroHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssistHeroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
