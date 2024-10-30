import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirurgia4CatarataComponent } from './cirurgia4-catarata.component';

describe('Cirurgia4CatarataComponent', () => {
  let component: Cirurgia4CatarataComponent;
  let fixture: ComponentFixture<Cirurgia4CatarataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirurgia4CatarataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cirurgia4CatarataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
