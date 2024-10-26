import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCirurgiasComponent } from './home-cirurgias.component';

describe('HomeCirurgiasComponent', () => {
  let component: HomeCirurgiasComponent;
  let fixture: ComponentFixture<HomeCirurgiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCirurgiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCirurgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
