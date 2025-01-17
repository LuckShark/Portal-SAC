import { Component } from '@angular/core';
import { NavegacaoService } from '../../../../../services/navegacao.service';

@Component({
  selector: 'app-heading-projetos-e-cursos',
  standalone: true,
  imports: [],
  templateUrl: './heading-projetos-e-cursos.component.html',
  styleUrl: './heading-projetos-e-cursos.component.scss'
})
export class HeadingProjetosECursosComponent {

  constructor(private navegacaoService: NavegacaoService) {}
      
        navegar(rota: string) {
          this.navegacaoService.navegarParaRota(rota);
        }

}
