import { Component } from '@angular/core';
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";
import { HeadingCirurgiasComponent } from "../../heading-cirurgias/heading-cirurgias.component";
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";

@Component({
  selector: 'app-cirurgia1-implante-anel',
  standalone: true,
  imports: [HeaderSaudeComponent, HeadingCirurgiasComponent, FooterSaudeComponent, MarqueSuaConsultaComponent],
  templateUrl: './cirurgia1-implante-anel.component.html',
  styleUrl: './cirurgia1-implante-anel.component.scss'
})
export class Cirurgia1ImplanteAnelComponent {

}
