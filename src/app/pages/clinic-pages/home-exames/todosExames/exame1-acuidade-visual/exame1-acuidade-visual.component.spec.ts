import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame1AcuidadeVisualComponent } from './exame1-acuidade-visual.component';

describe('Exame1AcuidadeVisualComponent', () => {
  let component: Exame1AcuidadeVisualComponent;
  let fixture: ComponentFixture<Exame1AcuidadeVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame1AcuidadeVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame1AcuidadeVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
