import { Component } from '@angular/core';
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";
import { HeadingCirurgiasComponent } from "../../heading-cirurgias/heading-cirurgias.component";
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";

@Component({
  selector: 'app-cirurgia6-glaucoma',
  standalone: true,
  imports: [FooterSaudeComponent, MarqueSuaConsultaComponent, HeadingCirurgiasComponent, HeaderSaudeComponent],
  templateUrl: './cirurgia6-glaucoma.component.html',
  styleUrl: './cirurgia6-glaucoma.component.scss'
})
export class Cirurgia6GlaucomaComponent {

}
