import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exame19SondagemComponent } from './exame19-sondagem.component';

describe('Exame19SondagemComponent', () => {
  let component: Exame19SondagemComponent;
  let fixture: ComponentFixture<Exame19SondagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exame19SondagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exame19SondagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
