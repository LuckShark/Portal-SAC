import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia1ImplanteAnelComponent } from './cirurgia1-implante-anel.component';

describe('Cirurgia1ImplanteAnelComponent', () => {
  let component: Cirurgia1ImplanteAnelComponent;
  let fixture: ComponentFixture<Cirurgia1ImplanteAnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia1ImplanteAnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia1ImplanteAnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
