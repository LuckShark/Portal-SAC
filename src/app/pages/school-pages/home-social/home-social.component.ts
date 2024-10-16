import { Component } from '@angular/core';
import { HeaderSocialComponent } from "../../../components/header-social/header-social.component";
import { HeroSocialComponent } from "../hero-social/hero-social.component";
import { FooterSocialComponent } from "../../../components/footer-social/footer-social.component";

@Component({
  selector: 'app-home-social',
  standalone: true,
  imports: [HeaderSocialComponent, HeroSocialComponent, FooterSocialComponent],
  templateUrl: './home-social.component.html',
  styleUrl: './home-social.component.scss'
})
export class HomeSocialComponent {

}
