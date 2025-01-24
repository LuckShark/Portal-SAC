import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-imprensa',
  standalone: true,
  imports: [],
  templateUrl: './heading-imprensa.component.html',
  styleUrl: './heading-imprensa.component.scss'
})
export class HeadingImprensaComponent {

   constructor(private navegacaoService: NavegacaoService) {}
        
          navegar(rota: string) {
            this.navegacaoService.navegarParaRota(rota);
          }

}
