import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReabilitacaoComponent } from './reabilitacao.component';

describe('ReabilitacaoComponent', () => {
  let component: ReabilitacaoComponent;
  let fixture: ComponentFixture<ReabilitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReabilitacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReabilitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
