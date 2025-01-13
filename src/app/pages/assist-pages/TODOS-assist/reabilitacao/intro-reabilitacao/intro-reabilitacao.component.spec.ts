import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroReabilitacaoComponent } from './intro-reabilitacao.component';

describe('IntroReabilitacaoComponent', () => {
  let component: IntroReabilitacaoComponent;
  let fixture: ComponentFixture<IntroReabilitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroReabilitacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroReabilitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
