import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavegacaoService } from '../../services/navegacao.service';

@Component({
  selector: 'app-footer-saude',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer-saude.component.html',
  styleUrl: './footer-saude.component.scss'
})
export class FooterSaudeComponent {

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
