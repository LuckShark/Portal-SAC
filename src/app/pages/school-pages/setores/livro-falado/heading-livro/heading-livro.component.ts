import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-livro',
  standalone: true,
  imports: [],
  templateUrl: './heading-livro.component.html',
  styleUrl: './heading-livro.component.scss'
})
export class HeadingLivroComponent {

    constructor(private navegacaoService: NavegacaoService) {}
  
    navegar(rota: string) {
      this.navegacaoService.navegarParaRota(rota);
    }

}
