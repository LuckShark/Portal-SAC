import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoConsultasComponent } from './conteudo-consultas.component';

describe('ConteudoConsultasComponent', () => {
  let component: ConteudoConsultasComponent;
  let fixture: ComponentFixture<ConteudoConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoConsultasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConteudoConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
