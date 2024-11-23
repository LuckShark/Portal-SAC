import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/first-page/home/home.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
}