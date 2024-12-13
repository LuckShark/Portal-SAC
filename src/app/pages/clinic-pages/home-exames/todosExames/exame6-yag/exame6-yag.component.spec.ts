import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame6YagComponent } from './exame6-yag.component';

describe('Exame6YagComponent', () => {
  let component: Exame6YagComponent;
  let fixture: ComponentFixture<Exame6YagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame6YagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame6YagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
