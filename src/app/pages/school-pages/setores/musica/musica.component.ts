import { Component } from '@angular/core';
import { HeaderSocialComponent } from "../../../../components/header-social/header-social.component";
import { HeadingMusicaComponent } from "./heading-musica/heading-musica.component";
import { FooterSocialComponent } from "../../../../components/footer-social/footer-social.component";
import { ComponenteBase } from '../../../../components/componente-base/componente-base.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [HeaderSocialComponent, HeadingMusicaComponent, FooterSocialComponent, CommonModule],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.scss'
})
export class MusicaComponent extends ComponenteBase {

}
