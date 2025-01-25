// componente-base.component.ts
import { Component } from '@angular/core';
import { NavegacaoService } from '../../services/navegacao.service';


@Component({
  template: '',
})
export class ComponenteBase {
  constructor(private navegacaoService: NavegacaoService) {}

  navegar(rota: string): void {
    this.navegacaoService.navegarParaRota(rota);
  }
}

