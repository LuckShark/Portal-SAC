import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingLivroComponent } from './heading-livro.component';

describe('HeadingLivroComponent', () => {
  let component: HeadingLivroComponent;
  let fixture: ComponentFixture<HeadingLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingLivroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
