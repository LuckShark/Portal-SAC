import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../services/navegacao.service';

@Component({
  selector: 'app-galeria-cirurgias',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './galeria-cirurgias.component.html',
  styleUrl: './galeria-cirurgias.component.scss'
})
export class GaleriaCirurgiasComponent {

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
