import { Component } from '@angular/core';
import { HeaderSaudeComponent } from "../../../components/header-saude/header-saude.component";
import { HeroHomeClinicComponent } from "../hero-home-clinic/hero-home-clinic.component";
import { FooterSaudeComponent } from "../../../components/footer-saude/footer-saude.component";

@Component({
  selector: 'app-home-clinic',
  standalone: true,
  imports: [HeaderSaudeComponent, HeroHomeClinicComponent, FooterSaudeComponent],
  templateUrl: './home-clinic.component.html',
  styleUrl: './home-clinic.component.scss'
})
export class HomeClinicComponent {

}
