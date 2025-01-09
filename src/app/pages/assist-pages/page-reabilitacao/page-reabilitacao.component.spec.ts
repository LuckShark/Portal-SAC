import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReabilitacaoComponent } from './page-reabilitacao.component';

describe('PageReabilitacaoComponent', () => {
  let component: PageReabilitacaoComponent;
  let fixture: ComponentFixture<PageReabilitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageReabilitacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageReabilitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
