import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-faq',
  standalone: true,
  imports: [],
  templateUrl: './heading-faq.component.html',
  styleUrl: './heading-faq.component.scss'
})
export class HeadingFaqComponent {

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
