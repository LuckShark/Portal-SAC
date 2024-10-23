import { Component } from '@angular/core';
import { HeaderSaudeComponent } from "../../../components/header-saude/header-saude.component";
import { FooterSaudeComponent } from "../../../components/footer-saude/footer-saude.component";
import { HeadingFaqComponent } from "./heading-faq/heading-faq.component";

@Component({
  selector: 'app-home-faq',
  standalone: true,
  imports: [HeaderSaudeComponent, FooterSaudeComponent, HeadingFaqComponent],
  templateUrl: './home-faq.component.html',
  styleUrl: './home-faq.component.scss'
})
export class HomeFaqComponent {

}
