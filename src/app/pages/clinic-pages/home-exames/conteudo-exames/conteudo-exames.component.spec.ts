import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoExamesComponent } from './conteudo-exames.component';

describe('ConteudoExamesComponent', () => {
  let component: ConteudoExamesComponent;
  let fixture: ComponentFixture<ConteudoExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoExamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConteudoExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
