import { Component, HostListener } from '@angular/core';
import { CarrosselComponent } from "../../../shared/carrossel/carrossel.component";
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-hero-home-clinic',
  standalone: true,
  imports: [CarrosselComponent, CommonModule, NgOptimizedImage, MatButtonModule, MatTabsModule],
  templateUrl: './hero-home-clinic.component.html',
  styleUrl: './hero-home-clinic.component.scss',
  animations: [
    trigger('countUp', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HeroHomeClinicComponent {

  //! ANIMAÇÃO DOS NÚMEROS SUBINDO NÃO MEXER !!!!!!!!

  numbers = [
    { label: 'Clientes atendidos', value: 10000, animatedValue: 0, prefix: '+' },
    { label: 'Anos de experiência', value: 83, animatedValue: 0, prefix: '' },
    { label: 'Tratamentos diferentes', value: 42, animatedValue: 0, prefix: '' },
    { label: 'Exames realizados', value: 400000, animatedValue: 0, prefix: '+' },
  ];

  private hasAnimated = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.hasAnimated && this.isElementInView()) {
      this.hasAnimated = true;
      this.animateNumbers();
    }
  }

  private isElementInView(): boolean {
    const section = document.querySelector('.h-numeros');
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.75;
  }

  private animateNumbers(): void {
    this.numbers.forEach((num) => {
      const step = Math.ceil(num.value / 100);
      let current = 0;

      const interval = setInterval(() => {
        current += step;
        num.animatedValue = Math.min(current, num.value);

        if (current >= num.value) {
          clearInterval(interval);
        }
      }, 20);
    });
  }

}
