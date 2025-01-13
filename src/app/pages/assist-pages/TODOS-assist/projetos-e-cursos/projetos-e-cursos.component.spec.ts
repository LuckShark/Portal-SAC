import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosECursosComponent } from './projetos-e-cursos.component';

describe('ProjetosECursosComponent', () => {
  let component: ProjetosECursosComponent;
  let fixture: ComponentFixture<ProjetosECursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosECursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosECursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
