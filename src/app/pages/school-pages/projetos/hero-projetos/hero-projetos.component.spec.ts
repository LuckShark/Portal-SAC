import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProjetosComponent } from './hero-projetos.component';

describe('HeroProjetosComponent', () => {
  let component: HeroProjetosComponent;
  let fixture: ComponentFixture<HeroProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroProjetosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
