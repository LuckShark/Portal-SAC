import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavegacaoService } from '../../../services/navegacao.service';

@Component({
  selector: 'app-assist-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './assist-cards.component.html',
  styleUrl: './assist-cards.component.scss'
})
export class AssistCardsComponent {

    isMenuOpen = false;
  
    constructor(private navegacaoService: NavegacaoService) {}
  
    navegar(rota: string) {
      this.navegacaoService.navegarParaRota(rota);
    }

}
