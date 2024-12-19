import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NavegacaoService } from '../../services/navegacao.service';


@Component({
  selector: 'app-header-social',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    CommonModule
  ],
  templateUrl: './header-social.component.html',
  styleUrl: './header-social.component.scss'
})
export class HeaderSocialComponent {

    isMenuOpen = false;
  
    constructor(private navegacaoService: NavegacaoService) {}
  
    navegar(rota: string) {
      this.navegacaoService.navegarParaRota(rota);
    }

}
