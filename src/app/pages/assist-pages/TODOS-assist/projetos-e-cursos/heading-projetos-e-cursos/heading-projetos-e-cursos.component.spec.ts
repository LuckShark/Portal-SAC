import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingProjetosECursosComponent } from './heading-projetos-e-cursos.component';

describe('HeadingProjetosECursosComponent', () => {
  let component: HeadingProjetosECursosComponent;
  let fixture: ComponentFixture<HeadingProjetosECursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingProjetosECursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingProjetosECursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
