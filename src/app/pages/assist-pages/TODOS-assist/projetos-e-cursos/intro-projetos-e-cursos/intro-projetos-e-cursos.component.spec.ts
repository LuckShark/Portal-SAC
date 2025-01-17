import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroProjetosECursosComponent } from './intro-projetos-e-cursos.component';

describe('IntroProjetosECursosComponent', () => {
  let component: IntroProjetosECursosComponent;
  let fixture: ComponentFixture<IntroProjetosECursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroProjetosECursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroProjetosECursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
