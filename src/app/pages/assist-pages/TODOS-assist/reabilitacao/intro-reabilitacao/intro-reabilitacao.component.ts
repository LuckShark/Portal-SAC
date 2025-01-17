import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-intro-reabilitacao',
  standalone: true,
  imports: [],
  templateUrl: './intro-reabilitacao.component.html',
  styleUrl: './intro-reabilitacao.component.scss'
})
export class IntroReabilitacaoComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800, // Duração da animação em milissegundos
        once: true,    // A animação será executada apenas uma vez
      });
    }
  }
}
