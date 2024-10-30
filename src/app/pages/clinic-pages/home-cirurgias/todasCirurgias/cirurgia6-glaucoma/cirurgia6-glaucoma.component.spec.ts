import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia6GlaucomaComponent } from './cirurgia6-glaucoma.component';

describe('Cirurgia6GlaucomaComponent', () => {
  let component: Cirurgia6GlaucomaComponent;
  let fixture: ComponentFixture<Cirurgia6GlaucomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia6GlaucomaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia6GlaucomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
