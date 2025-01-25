import { Component } from '@angular/core';
import { FooterSocialComponent } from "../../../../components/footer-social/footer-social.component";
import { HeaderSocialComponent } from "../../../../components/header-social/header-social.component";
import { HeadingImprensaComponent } from "./heading-imprensa/heading-imprensa.component";
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-imprensa',
  standalone: true,
  imports: [FooterSocialComponent, HeaderSocialComponent, HeadingImprensaComponent],
  templateUrl: './imprensa.component.html',
  styleUrl: './imprensa.component.scss',
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

export class ImprensaComponent {

}
