import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame21TesteOlhoComponent } from './exame21-teste-olho.component';

describe('Exame21TesteOlhoComponent', () => {
  let component: Exame21TesteOlhoComponent;
  let fixture: ComponentFixture<Exame21TesteOlhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame21TesteOlhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame21TesteOlhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
