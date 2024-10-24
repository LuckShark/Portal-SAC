import { Component } from '@angular/core';
import { HeaderSocialComponent } from "../../../components/header-social/header-social.component";
import { FooterSocialComponent } from "../../../components/footer-social/footer-social.component";
import { HeroSchoolComponent } from "./hero-school/hero-school.component";
import { FeaturesSchoolComponent } from "./features-school/features-school.component";
import { FeaturesListImagesSchoolComponent } from "./features-list-images-school/features-list-images-school.component";

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [HeaderSocialComponent, FooterSocialComponent, HeroSchoolComponent, FeaturesSchoolComponent, FeaturesListImagesSchoolComponent],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent {

}
