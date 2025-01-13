import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-reabilitacao',
  standalone: true,
  imports: [],
  templateUrl: './heading-reabilitacao.component.html',
  styleUrl: './heading-reabilitacao.component.scss'
})
export class HeadingReabilitacaoComponent {

  constructor(private navegacaoService: NavegacaoService) {}
  
    navegar(rota: string) {
      this.navegacaoService.navegarParaRota(rota);
    }

}
