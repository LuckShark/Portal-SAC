import { Component } from '@angular/core';
import { NavegacaoService } from '../../../services/navegacao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nova-galeria',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './nova-galeria.component.html',
  styleUrl: './nova-galeria.component.scss'
})
export class NovaGaleriaComponent {

  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string) {
    this.navegacaoService.navegarParaRota(rota);
  }

}
