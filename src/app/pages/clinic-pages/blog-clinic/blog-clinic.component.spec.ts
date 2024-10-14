import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogClinicComponent } from './blog-clinic.component';

describe('BlogClinicComponent', () => {
  let component: BlogClinicComponent;
  let fixture: ComponentFixture<BlogClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogClinicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
