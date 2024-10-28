import { Component } from '@angular/core';
import { HeaderSocialComponent } from "../../../components/header-social/header-social.component";
import { HeroProjetosComponent } from "./hero-projetos/hero-projetos.component";
import { FeaturesProjetosComponent } from "./features-projetos/features-projetos.component";
import { FooterSocialComponent } from "../../../components/footer-social/footer-social.component";

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [HeaderSocialComponent, HeroProjetosComponent, FeaturesProjetosComponent, FooterSocialComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {

}
