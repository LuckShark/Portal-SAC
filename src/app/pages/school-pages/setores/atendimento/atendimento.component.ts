import { Component } from '@angular/core';
import { ComponenteBase } from '../../../../components/componente-base/componente-base.component';
import { HeadingAtendimentoComponent } from "./heading-atendimento/heading-atendimento.component";
import { HeaderSocialComponent } from "../../../../components/header-social/header-social.component";
import { FooterSocialComponent } from "../../../../components/footer-social/footer-social.component";
import { WhatsappSchoolComponent } from "../../../../components/whatsapp-school/whatsapp-school.component";

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [HeadingAtendimentoComponent, HeaderSocialComponent, FooterSocialComponent, WhatsappSchoolComponent],
  templateUrl: './atendimento.component.html',
  styleUrl: './atendimento.component.scss'
})
export class AtendimentoComponent extends ComponenteBase {

}
