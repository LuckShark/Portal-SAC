import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaCirurgiasComponent } from './galeria-cirurgias.component';

describe('GaleriaCirurgiasComponent', () => {
  let component: GaleriaCirurgiasComponent;
  let fixture: ComponentFixture<GaleriaCirurgiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaCirurgiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriaCirurgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
