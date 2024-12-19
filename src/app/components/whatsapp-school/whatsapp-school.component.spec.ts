import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappSchoolComponent } from './whatsapp-school.component';

describe('WhatsappSchoolComponent', () => {
  let component: WhatsappSchoolComponent;
  let fixture: ComponentFixture<WhatsappSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsappSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
