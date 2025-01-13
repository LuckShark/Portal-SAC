import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortalecendoComponent } from './fortalecendo.component';

describe('FortalecendoComponent', () => {
  let component: FortalecendoComponent;
  let fixture: ComponentFixture<FortalecendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortalecendoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortalecendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
