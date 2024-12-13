import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame8CurvaComponent } from './exame8-curva.component';

describe('Exame8CurvaComponent', () => {
  let component: Exame8CurvaComponent;
  let fixture: ComponentFixture<Exame8CurvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame8CurvaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame8CurvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
