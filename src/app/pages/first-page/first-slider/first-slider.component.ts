import { Component } from '@angular/core';
import { CarrosselComponent } from '../../../shared/carrossel/carrossel.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-first-slider',
  standalone: true,
  imports: [
    CarrosselComponent,
    NgOptimizedImage,
    CommonModule,
    MatButtonModule,
    MatTabsModule
  ],
  templateUrl: './first-slider.component.html',
  styleUrls: ['./first-slider.component.scss']
})
export class FirstSliderComponent {

  indexImagemAtiva = 0;

  onIndexMudou(index: number) {
    this.indexImagemAtiva = index;
  }
  // Array com os conteúdos de cada slide
  slides = [
    {
      title: 'Sociedade de Assistência aos Cegos',
      subtitle: 'Prevenção e Saúde ocular',
      description: 'Localizada em uma região privilegiada...',
      buttons: [
        { label: 'Agende uma consulta', link: '#', style: 'primary' },
        { label: 'Saiba mais', link: '#', style: 'secondary' }
      ]
    },
    {
      title: 'Clínica Confiável',
      subtitle: 'Cuidamos da sua visão',
      description: 'Nossa clínica oferece atendimento humanizado...',
      buttons: [
        { label: 'Marque uma avaliação', link: '#', style: 'primary' },
        { label: 'Conheça a equipe', link: '#', style: 'secondary' }
      ]
    },
    {
      title: 'Tecnologia e Inovação',
      subtitle: 'Excelência em Oftalmologia',
      description: 'Usamos as mais modernas técnicas...',
      buttons: [
        { label: 'Veja nossos serviços', link: '#', style: 'primary' },
        { label: 'Fale conosco', link: '#', style: 'secondary' }
      ]
    }
  ];

  currentSlide = 0;

  // Função para mudar o slide atual
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
