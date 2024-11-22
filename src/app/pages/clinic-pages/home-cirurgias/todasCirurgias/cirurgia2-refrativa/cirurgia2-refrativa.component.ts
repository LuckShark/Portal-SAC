import { Component } from '@angular/core';
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";
import { HeadingCirurgiasComponent } from "../../heading-cirurgias/heading-cirurgias.component";
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";

@Component({
  selector: 'app-cirurgia2-refrativa',
  standalone: true,
  imports: [HeaderSaudeComponent, HeadingCirurgiasComponent, MarqueSuaConsultaComponent, FooterSaudeComponent],
  templateUrl: './cirurgia2-refrativa.component.html',
  styleUrl: './cirurgia2-refrativa.component.scss'
})
export class Cirurgia2RefrativaComponent {

}
