import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-esporte',
  standalone: true,
  imports: [],
  templateUrl: './heading-esporte.component.html',
  styleUrl: './heading-esporte.component.scss'
})
export class HeadingEsporteComponent {

  constructor(private navegacaoService: NavegacaoService) {}
      
        navegar(rota: string) {
          this.navegacaoService.navegarParaRota(rota);
        }

}
