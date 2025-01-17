import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-fortalecendo',
  standalone: true,
  imports: [],
  templateUrl: './heading-fortalecendo.component.html',
  styleUrl: './heading-fortalecendo.component.scss'
})
export class HeadingFortalecendoComponent {

  constructor(private navegacaoService: NavegacaoService) {}
    
      navegar(rota: string) {
        this.navegacaoService.navegarParaRota(rota);
      }

}
