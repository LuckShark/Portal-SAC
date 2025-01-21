import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingInformaticaComponent } from './heading-informatica.component';

describe('HeadingInformaticaComponent', () => {
  let component: HeadingInformaticaComponent;
  let fixture: ComponentFixture<HeadingInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingInformaticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
