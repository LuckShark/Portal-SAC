import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-gallery-school',
  standalone: true,
  imports: [],
  templateUrl: './gallery-school.component.html',
  styleUrl: './gallery-school.component.scss'
})

export class GallerySchoolComponent implements AfterViewInit {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
    // Método chamado após a inicialização da visualização do componente
    ngAfterViewInit() {
      // Verifique se o código está rodando no navegador
      if (isPlatformBrowser(this.platformId)) {
        // Obter referências aos elementos
        const gallery = document.querySelector('.gallery');
        const lightbox = document.getElementById('lightbox') as HTMLDivElement | null;
        const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement | null;
        const closeButton = document.getElementById('close') as HTMLElement | null;
  
        // Verificar se os elementos existem antes de adicionar event listeners
        if (gallery && lightbox && lightboxImage && closeButton) {
          // Adicionar evento de clique em cada imagem
          gallery.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLImageElement;
            if (target.classList.contains('gallery-image')) {
              const imageSrc = target.src;
              lightboxImage.src = imageSrc;
              lightbox.style.display = 'flex';
            }
          });
  
          // Fechar o lightbox ao clicar no botão de fechar
          closeButton.addEventListener('click', () => {
            lightbox.style.display = 'none';
          });
  
          // Fechar o lightbox ao clicar fora da imagem
          lightbox.addEventListener('click', (e: Event) => {
            if (e.target === lightbox) {
              lightbox.style.display = 'none';
            }
          });
        } else {
          console.error('Erro: Elementos da galeria ou do lightbox não foram encontrados.');
        }
      }
    }
  }
  