import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-exames',
  standalone: true,
  imports: [],
  templateUrl: './heading-exames.component.html',
  styleUrl: './heading-exames.component.scss'
})
export class HeadingExamesComponent {

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
