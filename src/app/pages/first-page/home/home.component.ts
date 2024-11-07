import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FirstHeaderComponent } from "../first-header/first-header.component";
import { FirstCardsComponent } from "../first-cards/first-cards.component";
import { FirstSliderComponent } from "../first-slider/first-slider.component";
import { FirstFooterComponent } from "../first-footer/first-footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    FirstHeaderComponent,
    FirstCardsComponent,
    FirstSliderComponent,
    FirstFooterComponent
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
