import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavegacaoService } from '../../services/navegacao.service';

@Component({
  selector: 'app-footer-assist',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer-assist.component.html',
  styleUrl: './footer-assist.component.scss'
})
export class FooterAssistComponent {

   constructor(private navegacaoService: NavegacaoService) {}
    
      navegar(rota: string) {
        this.navegacaoService.navegarParaRota(rota);
      }
  

}
