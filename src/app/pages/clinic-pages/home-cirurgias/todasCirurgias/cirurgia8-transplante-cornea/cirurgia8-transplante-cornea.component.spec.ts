import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia8TransplanteCorneaComponent } from './cirurgia8-transplante-cornea.component';

describe('Cirurgia8TransplanteCorneaComponent', () => {
  let component: Cirurgia8TransplanteCorneaComponent;
  let fixture: ComponentFixture<Cirurgia8TransplanteCorneaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia8TransplanteCorneaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia8TransplanteCorneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
