import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistCardsComponent } from './assist-cards.component';

describe('AssistCardsComponent', () => {
  let component: AssistCardsComponent;
  let fixture: ComponentFixture<AssistCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssistCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
