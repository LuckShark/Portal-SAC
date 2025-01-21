import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingEsporteComponent } from './heading-esporte.component';

describe('HeadingEsporteComponent', () => {
  let component: HeadingEsporteComponent;
  let fixture: ComponentFixture<HeadingEsporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingEsporteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingEsporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
