import { Component } from '@angular/core';
import { HeaderAssistComponent } from "../../../../components/header-assist/header-assist.component";
import { HeadingFortalecendoComponent } from "./heading-fortalecendo/heading-fortalecendo.component";
import { IntroFortalecendoComponent } from "./intro-fortalecendo/intro-fortalecendo.component";
import { WhatsappSchoolComponent } from "../../../../components/whatsapp-school/whatsapp-school.component";
import { FooterAssistComponent } from "../../../../components/footer-assist/footer-assist.component";
import { NavegacaoService } from '../../../../services/navegacao.service';
import { GalleryFortalecendoComponent } from "./gallery-fortalecendo/gallery-fortalecendo.component";

@Component({
  selector: 'app-fortalecendo',
  standalone: true,
  imports: [HeaderAssistComponent, HeadingFortalecendoComponent, IntroFortalecendoComponent, WhatsappSchoolComponent, FooterAssistComponent, GalleryFortalecendoComponent],
  templateUrl: './fortalecendo.component.html',
  styleUrl: './fortalecendo.component.scss'
})
export class FortalecendoComponent {

  constructor(private navegacaoService: NavegacaoService) {}
    
      navegar(rota: string) {
        this.navegacaoService.navegarParaRota(rota);
      }

}
