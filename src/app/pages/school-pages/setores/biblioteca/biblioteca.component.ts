import { Component } from '@angular/core';
import { HeaderSocialComponent } from "../../../../components/header-social/header-social.component";
import { HeadingBibliotecaComponent } from "./heading-biblioteca/heading-biblioteca.component";
import { FooterSocialComponent } from "../../../../components/footer-social/footer-social.component";
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [HeaderSocialComponent, HeadingBibliotecaComponent, FooterSocialComponent],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.scss',
  animations: [
      trigger('fadeSlideLeft', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ]),
      ]),
      trigger('fadeSlideRight', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateX(50px)' }),
          animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ]),
      ]),
    ],
})
export class BibliotecaComponent {

}
