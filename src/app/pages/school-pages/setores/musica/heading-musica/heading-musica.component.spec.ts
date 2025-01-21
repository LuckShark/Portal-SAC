import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingMusicaComponent } from './heading-musica.component';

describe('HeadingMusicaComponent', () => {
  let component: HeadingMusicaComponent;
  let fixture: ComponentFixture<HeadingMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingMusicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
