import { Component } from '@angular/core';
import { HeaderSocialComponent } from "../../../components/header-social/header-social.component";
import { HeroSocialComponent } from "../hero-social/hero-social.component";
import { FooterSocialComponent } from "../../../components/footer-social/footer-social.component";
import { HeroVideoComponent } from "../hero-video/hero-video.component";

@Component({
  selector: 'app-home-social',
  standalone: true,
  imports: [HeaderSocialComponent, HeroSocialComponent, FooterSocialComponent, HeroVideoComponent],
  templateUrl: './home-social.component.html',
  styleUrl: './home-social.component.scss'
})
export class HomeSocialComponent {

}
