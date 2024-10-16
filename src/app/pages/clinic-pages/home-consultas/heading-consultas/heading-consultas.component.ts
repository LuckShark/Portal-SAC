import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-consultas',
  standalone: true,
  imports: [],
  templateUrl: './heading-consultas.component.html',
  styleUrl: './heading-consultas.component.scss'
})
export class HeadingConsultasComponent {

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
