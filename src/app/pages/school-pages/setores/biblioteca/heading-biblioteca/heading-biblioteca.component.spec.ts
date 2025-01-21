import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingBibliotecaComponent } from './heading-biblioteca.component';

describe('HeadingBibliotecaComponent', () => {
  let component: HeadingBibliotecaComponent;
  let fixture: ComponentFixture<HeadingBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingBibliotecaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
