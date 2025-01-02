import { Component } from '@angular/core';
import { HeaderSocialComponent } from "../../../../components/header-social/header-social.component";
import { HeadingLivroComponent } from "./heading-livro/heading-livro.component";
import { VoluntarioComponent } from "../../../../components/voluntario/voluntario.component";
import { FooterSaudeComponent } from "../../../../components/footer-saude/footer-saude.component";

@Component({
  selector: 'app-livro-falado',
  standalone: true,
  imports: [HeaderSocialComponent, HeadingLivroComponent, VoluntarioComponent, FooterSaudeComponent],
  templateUrl: './livro-falado.component.html',
  styleUrl: './livro-falado.component.scss'
})
export class LivroFaladoComponent {

}
