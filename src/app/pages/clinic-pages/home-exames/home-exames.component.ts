import { Component } from '@angular/core';
import { FooterSaudeComponent } from "../../../components/footer-saude/footer-saude.component";
import { GaleriaExamesComponent } from "./galeria-exames/galeria-exames.component";
import { ConteudoExamesComponent } from "./conteudo-exames/conteudo-exames.component";
import { HeadingExamesComponent } from "./heading-exames/heading-exames.component";
import { HeaderSaudeComponent } from "../../../components/header-saude/header-saude.component";
import { WhatsappClinicComponent } from "../../../components/whatsapp-clinic/whatsapp-clinic.component";

@Component({
  selector: 'app-home-exames',
  standalone: true,
  imports: [FooterSaudeComponent, GaleriaExamesComponent, ConteudoExamesComponent, HeadingExamesComponent, HeaderSaudeComponent, WhatsappClinicComponent],
  templateUrl: './home-exames.component.html',
  styleUrl: './home-exames.component.scss'
})
export class HomeExamesComponent {

}
