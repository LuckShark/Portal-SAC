import { Component } from '@angular/core';
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";
import { MarqueSuaConsultaComponent } from "../../../marque-sua-consulta/marque-sua-consulta.component";
import { HeadingExamesComponent } from "../../heading-exames/heading-exames.component";
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";

@Component({
  selector: 'app-exame9-ecografia',
  standalone: true,
  imports: [FooterSaudeComponent, MarqueSuaConsultaComponent, HeadingExamesComponent, HeaderSaudeComponent],
  templateUrl: './exame9-ecografia.component.html',
  styleUrl: './exame9-ecografia.component.scss'
})
export class Exame9EcografiaComponent {

}
