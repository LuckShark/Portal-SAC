import { Component } from '@angular/core';
import { HeaderSaudeComponent } from "../../../../../components/header-saude/header-saude.component";
import { FooterSaudeComponent } from "../../../../../components/footer-saude/footer-saude.component";
import { HeadingExamesComponent } from "../../heading-exames/heading-exames.component";

@Component({
  selector: 'app-exame1-acuidade-visual',
  standalone: true,
  imports: [HeaderSaudeComponent, FooterSaudeComponent, HeadingExamesComponent],
  templateUrl: './exame1-acuidade-visual.component.html',
  styleUrl: './exame1-acuidade-visual.component.scss'
})
export class Exame1AcuidadeVisualComponent {

}
