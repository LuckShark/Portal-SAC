import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueSuaConsultaComponent } from './marque-sua-consulta.component';

describe('MarqueSuaConsultaComponent', () => {
  let component: MarqueSuaConsultaComponent;
  let fixture: ComponentFixture<MarqueSuaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueSuaConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarqueSuaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
