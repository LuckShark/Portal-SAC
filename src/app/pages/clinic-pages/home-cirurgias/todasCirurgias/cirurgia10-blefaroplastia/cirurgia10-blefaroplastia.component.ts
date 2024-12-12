import { Component } from '@angular/core';
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";
import { HeadingCirurgiasComponent } from "../../heading-cirurgias/heading-cirurgias.component";
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";

@Component({
  selector: 'app-cirurgia10-blefaroplastia',
  standalone: true,
  imports: [FooterSaudeComponent, MarqueSuaConsultaComponent, HeadingCirurgiasComponent, HeaderSaudeComponent],
  templateUrl: './cirurgia10-blefaroplastia.component.html',
  styleUrl: './cirurgia10-blefaroplastia.component.scss'
})
export class Cirurgia10BlefaroplastiaComponent {

}
