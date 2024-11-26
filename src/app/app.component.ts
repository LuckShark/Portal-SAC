import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/first-page/home/home.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate, group, query } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0 }),
            animate('300ms ease-out', style({ opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})

export class AppComponent implements OnInit{
  showPopup = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Verifica se está no navegador
    if (isPlatformBrowser(this.platformId)) {
      const popupShown = localStorage.getItem('popupShown');
      if (!popupShown) {
        this.showPopup = true;
        localStorage.setItem('popupShown', 'true');
      }
    }
  }

  closePopup() {
    this.showPopup = false;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  isRouteChanging = false;

  onRouteChange() {
    this.isRouteChanging = true;
    setTimeout(() => {
      this.isRouteChanging = false;
    }, 300); // Duração da animação em milissegundos
  }


}