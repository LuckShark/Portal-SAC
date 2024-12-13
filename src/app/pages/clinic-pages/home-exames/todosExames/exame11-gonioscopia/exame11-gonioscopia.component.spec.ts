import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame11GonioscopiaComponent } from './exame11-gonioscopia.component';

describe('Exame11GonioscopiaComponent', () => {
  let component: Exame11GonioscopiaComponent;
  let fixture: ComponentFixture<Exame11GonioscopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame11GonioscopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame11GonioscopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
