import { Component } from '@angular/core';
import { NavegacaoService } from '../../services/navegacao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-saude',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header-saude.component.html',
  styleUrl: './header-saude.component.scss'
})
export class HeaderSaudeComponent {

  isMenuOpen = false;

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
