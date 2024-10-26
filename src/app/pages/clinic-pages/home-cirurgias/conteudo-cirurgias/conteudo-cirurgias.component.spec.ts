import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoCirurgiasComponent } from './conteudo-cirurgias.component';

describe('ConteudoCirurgiasComponent', () => {
  let component: ConteudoCirurgiasComponent;
  let fixture: ComponentFixture<ConteudoCirurgiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoCirurgiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConteudoCirurgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
