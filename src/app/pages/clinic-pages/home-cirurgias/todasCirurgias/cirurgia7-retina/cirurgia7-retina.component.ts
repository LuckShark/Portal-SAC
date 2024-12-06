import { Component } from '@angular/core';
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";
import { HeadingCirurgiasComponent } from "../../heading-cirurgias/heading-cirurgias.component";
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";

@Component({
  selector: 'app-cirurgia7-retina',
  standalone: true,
  imports: [FooterSaudeComponent, MarqueSuaConsultaComponent, HeadingCirurgiasComponent, HeaderSaudeComponent],
  templateUrl: './cirurgia7-retina.component.html',
  styleUrl: './cirurgia7-retina.component.scss'
})
export class Cirurgia7RetinaComponent {

}
