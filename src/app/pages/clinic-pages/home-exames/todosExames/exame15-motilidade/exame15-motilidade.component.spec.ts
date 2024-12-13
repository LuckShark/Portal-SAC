import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame15MotilidadeComponent } from './exame15-motilidade.component';

describe('Exame15MotilidadeComponent', () => {
  let component: Exame15MotilidadeComponent;
  let fixture: ComponentFixture<Exame15MotilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame15MotilidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame15MotilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
