import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaGaleriaComponent } from './nova-galeria.component';

describe('NovaGaleriaComponent', () => {
  let component: NovaGaleriaComponent;
  let fixture: ComponentFixture<NovaGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaGaleriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
