import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingFortalecendoComponent } from './heading-fortalecendo.component';

describe('HeadingFortalecendoComponent', () => {
  let component: HeadingFortalecendoComponent;
  let fixture: ComponentFixture<HeadingFortalecendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingFortalecendoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingFortalecendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
