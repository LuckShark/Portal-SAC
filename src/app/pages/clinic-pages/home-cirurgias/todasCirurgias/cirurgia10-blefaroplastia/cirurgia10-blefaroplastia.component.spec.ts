import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia10BlefaroplastiaComponent } from './cirurgia10-blefaroplastia.component';

describe('Cirurgia10BlefaroplastiaComponent', () => {
  let component: Cirurgia10BlefaroplastiaComponent;
  let fixture: ComponentFixture<Cirurgia10BlefaroplastiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia10BlefaroplastiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia10BlefaroplastiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
