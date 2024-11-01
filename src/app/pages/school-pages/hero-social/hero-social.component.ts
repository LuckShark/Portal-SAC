import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-social',
  standalone: true,
  imports: [],
  templateUrl: './hero-social.component.html',
  styleUrls: ['./hero-social.component.scss']
})
export class HeroSocialComponent {

  constructor(private router: Router) {}

  navegar(rota: string) {
    this.router.navigate([rota]).then(() => {
      window.scrollTo(0, 0);  // Força a rolagem para o topo após a navegação
    });
  }
}
