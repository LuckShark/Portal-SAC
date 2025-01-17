import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFortalecendoComponent } from './gallery-fortalecendo.component';

describe('GalleryFortalecendoComponent', () => {
  let component: GalleryFortalecendoComponent;
  let fixture: ComponentFixture<GalleryFortalecendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryFortalecendoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryFortalecendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
