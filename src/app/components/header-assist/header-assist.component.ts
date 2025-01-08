import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavegacaoService } from '../../services/navegacao.service';

@Component({
  selector: 'app-header-assist',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header-assist.component.html',
  styleUrl: './header-assist.component.scss'
})
export class HeaderAssistComponent {

   isMenuOpen = false;
  
    constructor(private navegacaoService: NavegacaoService) {}
  
    navegar(rota: string) {
      this.navegacaoService.navegarParaRota(rota);
    }

}
