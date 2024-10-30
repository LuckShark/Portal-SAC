import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia11PterigioComponent } from './cirurgia11-pterigio.component';

describe('Cirurgia11PterigioComponent', () => {
  let component: Cirurgia11PterigioComponent;
  let fixture: ComponentFixture<Cirurgia11PterigioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia11PterigioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia11PterigioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
