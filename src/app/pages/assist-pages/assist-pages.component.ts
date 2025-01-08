import { Component } from '@angular/core';
import { HeaderAssistComponent } from "../../components/header-assist/header-assist.component";
import { AssistHeroHomeComponent } from "./assist-hero-home/assist-hero-home.component";
import { AssistCardsComponent } from "./assist-cards/assist-cards.component";
import { FooterAssistComponent } from "../../components/footer-assist/footer-assist.component";
import { WhatsappSchoolComponent } from "../../components/whatsapp-school/whatsapp-school.component";
import { MapSocialComponent } from "../../components/map-social/map-social.component";
import { VoluntarioComponent } from "../../components/voluntario/voluntario.component";

@Component({
  selector: 'app-assist-pages',
  standalone: true,
  imports: [HeaderAssistComponent, AssistHeroHomeComponent, AssistCardsComponent, FooterAssistComponent, WhatsappSchoolComponent, MapSocialComponent, VoluntarioComponent],
  templateUrl: './assist-pages.component.html',
  styleUrl: './assist-pages.component.scss'
})
export class AssistPagesComponent {

}
