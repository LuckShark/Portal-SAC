import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprensaComponent } from './imprensa.component';

describe('ImprensaComponent', () => {
  let component: ImprensaComponent;
  let fixture: ComponentFixture<ImprensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprensaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImprensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
