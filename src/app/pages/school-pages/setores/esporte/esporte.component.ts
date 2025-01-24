import { Component } from '@angular/core';
import { HeadingEsporteComponent } from "./heading-esporte/heading-esporte.component";
import { HeaderSocialComponent } from "../../../../components/header-social/header-social.component";
import { FooterSocialComponent } from "../../../../components/footer-social/footer-social.component";

@Component({
  selector: 'app-esporte',
  standalone: true,
  imports: [HeadingEsporteComponent, HeaderSocialComponent, FooterSocialComponent],
  templateUrl: './esporte.component.html',
  styleUrl: './esporte.component.scss'
})
export class EsporteComponent {

}
