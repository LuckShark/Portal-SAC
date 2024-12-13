import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame14MicroscopiaComponent } from './exame14-microscopia.component';

describe('Exame14MicroscopiaComponent', () => {
  let component: Exame14MicroscopiaComponent;
  let fixture: ComponentFixture<Exame14MicroscopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame14MicroscopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame14MicroscopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
