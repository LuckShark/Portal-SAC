import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia7RetinaComponent } from './cirurgia7-retina.component';

describe('Cirurgia7RetinaComponent', () => {
  let component: Cirurgia7RetinaComponent;
  let fixture: ComponentFixture<Cirurgia7RetinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia7RetinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia7RetinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
