import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../services/navegacao.service';

@Component({
  selector: 'app-galeria-exames',
  standalone: true,
  imports: [],
  templateUrl: './galeria-exames.component.html',
  styleUrl: './galeria-exames.component.scss'
})
export class GaleriaExamesComponent {

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
