import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingAtendimentoComponent } from './heading-atendimento.component';

describe('HeadingAtendimentoComponent', () => {
  let component: HeadingAtendimentoComponent;
  let fixture: ComponentFixture<HeadingAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
