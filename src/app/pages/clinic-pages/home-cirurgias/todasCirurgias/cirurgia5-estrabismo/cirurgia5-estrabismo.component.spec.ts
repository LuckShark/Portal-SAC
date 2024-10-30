import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia5EstrabismoComponent } from './cirurgia5-estrabismo.component';

describe('Cirurgia5EstrabismoComponent', () => {
  let component: Cirurgia5EstrabismoComponent;
  let fixture: ComponentFixture<Cirurgia5EstrabismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia5EstrabismoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia5EstrabismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
