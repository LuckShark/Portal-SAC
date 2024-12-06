import { Component } from '@angular/core';
import { HeaderSaudeComponent } from "../../../components/header-saude/header-saude.component";
import { HeadingConsultasComponent } from "./heading-consultas/heading-consultas.component";
import { FooterSaudeComponent } from "../../../components/footer-saude/footer-saude.component";
import { ConteudoConsultasComponent } from "./conteudo-consultas/conteudo-consultas.component";
import { PartnersComponent } from "../partners/partners.component";

@Component({
  selector: 'app-home-consultas',
  standalone: true,
  imports: [HeaderSaudeComponent, HeadingConsultasComponent, FooterSaudeComponent, ConteudoConsultasComponent, PartnersComponent],
  templateUrl: './home-consultas.component.html',
  styleUrl: './home-consultas.component.scss'
})
export class HomeConsultasComponent {

}
