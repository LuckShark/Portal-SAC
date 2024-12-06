import { Component } from '@angular/core';
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";
import { HeadingCirurgiasComponent } from "../../heading-cirurgias/heading-cirurgias.component";

@Component({
  selector: 'app-cirurgia3-plastica-ocular',
  standalone: true,
  imports: [MarqueSuaConsultaComponent, FooterSaudeComponent, HeaderSaudeComponent, HeadingCirurgiasComponent],
  templateUrl: './cirurgia3-plastica-ocular.component.html',
  styleUrl: './cirurgia3-plastica-ocular.component.scss'
})
export class Cirurgia3PlasticaOcularComponent {

}
