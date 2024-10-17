import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaExamesComponent } from './galeria-exames.component';

describe('GaleriaExamesComponent', () => {
  let component: GaleriaExamesComponent;
  let fixture: ComponentFixture<GaleriaExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaExamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriaExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
