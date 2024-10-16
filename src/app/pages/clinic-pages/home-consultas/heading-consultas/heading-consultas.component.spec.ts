import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingConsultasComponent } from './heading-consultas.component';

describe('HeadingConsultasComponent', () => {
  let component: HeadingConsultasComponent;
  let fixture: ComponentFixture<HeadingConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingConsultasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
