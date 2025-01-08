import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSocialComponent } from './map-social.component';

describe('MapSocialComponent', () => {
  let component: MapSocialComponent;
  let fixture: ComponentFixture<MapSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
