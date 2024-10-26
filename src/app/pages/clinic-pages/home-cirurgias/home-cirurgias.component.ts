import { Component } from '@angular/core';
import { HeaderSaudeComponent } from "../../../components/header-saude/header-saude.component";
import { HeadingCirurgiasComponent } from "./heading-cirurgias/heading-cirurgias.component";
import { ConteudoCirurgiasComponent } from "./conteudo-cirurgias/conteudo-cirurgias.component";
import { GaleriaCirurgiasComponent } from "./galeria-cirurgias/galeria-cirurgias.component";
import { FooterSaudeComponent } from "../../../components/footer-saude/footer-saude.component";

@Component({
  selector: 'app-home-cirurgias',
  standalone: true,
  imports: [HeaderSaudeComponent, HeadingCirurgiasComponent, ConteudoCirurgiasComponent, GaleriaCirurgiasComponent, FooterSaudeComponent],
  templateUrl: './home-cirurgias.component.html',
  styleUrl: './home-cirurgias.component.scss'
})
export class HomeCirurgiasComponent {

}
