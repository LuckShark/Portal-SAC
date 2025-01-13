import { Component } from '@angular/core';
import { HeaderAssistComponent } from "../../../../components/header-assist/header-assist.component";
import { WhatsappSchoolComponent } from "../../../../components/whatsapp-school/whatsapp-school.component";
import { FooterAssistComponent } from "../../../../components/footer-assist/footer-assist.component";
import { HeadingReabilitacaoComponent } from "./heading-reabilitacao/heading-reabilitacao.component";
import { IntroReabilitacaoComponent } from "./intro-reabilitacao/intro-reabilitacao.component";

@Component({
  selector: 'app-reabilitacao',
  standalone: true,
  imports: [HeaderAssistComponent, WhatsappSchoolComponent, FooterAssistComponent, HeadingReabilitacaoComponent, IntroReabilitacaoComponent],
  templateUrl: './reabilitacao.component.html',
  styleUrl: './reabilitacao.component.scss'
})
export class ReabilitacaoComponent {

}
