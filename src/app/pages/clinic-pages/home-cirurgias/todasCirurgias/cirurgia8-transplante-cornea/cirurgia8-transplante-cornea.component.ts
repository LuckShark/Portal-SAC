import { Component } from '@angular/core';
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";
import { HeadingCirurgiasComponent } from "../../heading-cirurgias/heading-cirurgias.component";
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";

@Component({
  selector: 'app-cirurgia8-transplante-cornea',
  standalone: true,
  imports: [HeaderSaudeComponent, HeadingCirurgiasComponent, MarqueSuaConsultaComponent, FooterSaudeComponent],
  templateUrl: './cirurgia8-transplante-cornea.component.html',
  styleUrl: './cirurgia8-transplante-cornea.component.scss'
})
export class Cirurgia8TransplanteCorneaComponent {

}
