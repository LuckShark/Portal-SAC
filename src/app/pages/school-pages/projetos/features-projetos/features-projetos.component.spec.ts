import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesProjetosComponent } from './features-projetos.component';

describe('FeaturesProjetosComponent', () => {
  let component: FeaturesProjetosComponent;
  let fixture: ComponentFixture<FeaturesProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesProjetosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
