import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private router: Router) {}

  navegar(rota: string) {
    this.router.navigate([rota]).then(() => {
      window.scrollTo(0, 0);  // Força a rolagem para o topo após a navegação
    });
  }

}
