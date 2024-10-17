import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExamesComponent } from './home-exames.component';

describe('HomeExamesComponent', () => {
  let component: HomeExamesComponent;
  let fixture: ComponentFixture<HomeExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
