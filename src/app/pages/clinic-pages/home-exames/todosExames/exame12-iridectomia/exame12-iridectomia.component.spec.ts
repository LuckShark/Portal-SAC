import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame12IridectomiaComponent } from './exame12-iridectomia.component';

describe('Exame12IridectomiaComponent', () => {
  let component: Exame12IridectomiaComponent;
  let fixture: ComponentFixture<Exame12IridectomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame12IridectomiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame12IridectomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
