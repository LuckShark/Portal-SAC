import { Component } from '@angular/core';
import { NavegacaoService } from '../../../services/navegacao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './first-cards.component.html',
  styleUrl: './first-cards.component.scss'
})
export class FirstCardsComponent {

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
