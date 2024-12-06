import { Component } from '@angular/core';
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";
import { HeadingCirurgiasComponent } from "../../heading-cirurgias/heading-cirurgias.component";
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";

@Component({
  selector: 'app-cirurgia4-catarata',
  standalone: true,
  imports: [MarqueSuaConsultaComponent, FooterSaudeComponent, HeadingCirurgiasComponent, HeaderSaudeComponent],
  templateUrl: './cirurgia4-catarata.component.html',
  styleUrl: './cirurgia4-catarata.component.scss'
})
export class Cirurgia4CatarataComponent {

}
