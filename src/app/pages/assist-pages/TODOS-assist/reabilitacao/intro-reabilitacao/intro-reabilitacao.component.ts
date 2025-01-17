import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-intro-reabilitacao',
  standalone: true,
  imports: [],
  templateUrl: './intro-reabilitacao.component.html',
  styleUrl: './intro-reabilitacao.component.scss'
})
export class IntroReabilitacaoComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true,     // Executa a animação apenas uma vez
    });
  }
}
