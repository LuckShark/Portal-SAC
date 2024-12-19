import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavegacaoService } from '../../services/navegacao.service';

@Component({
  selector: 'app-footer-social',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer-social.component.html',
  styleUrl: './footer-social.component.scss'
})
export class FooterSocialComponent {

  constructor(private navegacaoService: NavegacaoService) {}
  
    navegar(rota: string) {
      this.navegacaoService.navegarParaRota(rota);
    }

}
