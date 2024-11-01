import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

  constructor(private router: Router) {}

  navegarParaRota(rota: string) {
    this.router.navigate([rota]).then(() => {
      window.scrollTo(0, 0);  // Força a rolagem para o topo
    });
  }
}
