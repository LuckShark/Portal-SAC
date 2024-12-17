import { Component } from '@angular/core';
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";
import { HeadingExamesComponent } from "../../heading-exames/heading-exames.component";
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";

@Component({
  selector: 'app-exame5-campimetria',
  standalone: true,
  imports: [FooterSaudeComponent, MarqueSuaConsultaComponent, HeadingExamesComponent, HeaderSaudeComponent],
  templateUrl: './exame5-campimetria.component.html',
  styleUrl: './exame5-campimetria.component.scss'
})
export class Exame5CampimetriaComponent {

}
