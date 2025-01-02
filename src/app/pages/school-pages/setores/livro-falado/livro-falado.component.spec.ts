import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroFaladoComponent } from './livro-falado.component';

describe('LivroFaladoComponent', () => {
  let component: LivroFaladoComponent;
  let fixture: ComponentFixture<LivroFaladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroFaladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivroFaladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
