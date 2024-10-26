import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-cirurgias',
  standalone: true,
  imports: [],
  templateUrl: './heading-cirurgias.component.html',
  styleUrl: './heading-cirurgias.component.scss'
})
export class HeadingCirurgiasComponent {

  
  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
