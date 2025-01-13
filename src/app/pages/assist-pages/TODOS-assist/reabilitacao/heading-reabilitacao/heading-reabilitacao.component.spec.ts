import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingReabilitacaoComponent } from './heading-reabilitacao.component';

describe('HeadingReabilitacaoComponent', () => {
  let component: HeadingReabilitacaoComponent;
  let fixture: ComponentFixture<HeadingReabilitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingReabilitacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingReabilitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
