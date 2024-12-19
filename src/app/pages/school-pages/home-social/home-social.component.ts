import { Component } from '@angular/core';
import { HeaderSocialComponent } from "../../../components/header-social/header-social.component";
import { HeroSocialComponent } from "../hero-social/hero-social.component";
import { FooterSocialComponent } from "../../../components/footer-social/footer-social.component";
import { HeroVideoComponent } from "../hero-video/hero-video.component";
import { TestHeaderComponent } from "../../../components/test-header/test-header.component";
import { WhatsappSchoolComponent } from "../../../components/whatsapp-school/whatsapp-school.component";
import { ContactClinicComponent } from "../../clinic-pages/contact-clinic/contact-clinic.component";
import { GallerySchoolComponent } from "../gallery-school/gallery-school.component";


@Component({
  selector: 'app-home-social',
  standalone: true,
  imports: [HeaderSocialComponent, HeroSocialComponent, FooterSocialComponent, HeroVideoComponent, TestHeaderComponent, WhatsappSchoolComponent, ContactClinicComponent, GallerySchoolComponent],
  templateUrl: './home-social.component.html',
  styleUrl: './home-social.component.scss'
})
export class HomeSocialComponent {

}
