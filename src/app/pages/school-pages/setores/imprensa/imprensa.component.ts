import { Component } from '@angular/core';
import { FooterSocialComponent } from "../../../../components/footer-social/footer-social.component";
import { HeaderSocialComponent } from "../../../../components/header-social/header-social.component";
import { HeadingImprensaComponent } from "./heading-imprensa/heading-imprensa.component";

@Component({
  selector: 'app-imprensa',
  standalone: true,
  imports: [FooterSocialComponent, HeaderSocialComponent, HeadingImprensaComponent],
  templateUrl: './imprensa.component.html',
  styleUrl: './imprensa.component.scss'
})
export class ImprensaComponent {

}
