import { Component } from '@angular/core';
import { NavegacaoService } from '../../services/navegacao.service';

@Component({
  selector: 'app-header-saude',
  standalone: true,
  imports: [],
  templateUrl: './header-saude.component.html',
  styleUrl: './header-saude.component.scss'
})
export class HeaderSaudeComponent {

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
