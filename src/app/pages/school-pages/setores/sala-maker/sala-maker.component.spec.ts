import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaMakerComponent } from './sala-maker.component';

describe('SalaMakerComponent', () => {
  let component: SalaMakerComponent;
  let fixture: ComponentFixture<SalaMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaMakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
