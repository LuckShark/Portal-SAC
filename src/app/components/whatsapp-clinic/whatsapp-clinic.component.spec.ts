import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappClinicComponent } from './whatsapp-clinic.component';

describe('WhatsappClinicComponent', () => {
  let component: WhatsappClinicComponent;
  let fixture: ComponentFixture<WhatsappClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappClinicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsappClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
