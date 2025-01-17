import { Component } from '@angular/core';
import { HeaderAssistComponent } from "../../../../components/header-assist/header-assist.component";
import { FooterAssistComponent } from "../../../../components/footer-assist/footer-assist.component";
import { WhatsappSchoolComponent } from "../../../../components/whatsapp-school/whatsapp-school.component";
import { GalleryFortalecendoComponent } from "../fortalecendo/gallery-fortalecendo/gallery-fortalecendo.component";
import { HeadingProjetosECursosComponent } from "./heading-projetos-e-cursos/heading-projetos-e-cursos.component";
import { IntroProjetosECursosComponent } from "./intro-projetos-e-cursos/intro-projetos-e-cursos.component";
import { ButtonsComponent } from "./buttons/buttons.component";

@Component({
  selector: 'app-projetos-e-cursos',
  standalone: true,
  imports: [HeaderAssistComponent, FooterAssistComponent, WhatsappSchoolComponent, GalleryFortalecendoComponent, HeadingProjetosECursosComponent, IntroProjetosECursosComponent, ButtonsComponent],
  templateUrl: './projetos-e-cursos.component.html',
  styleUrl: './projetos-e-cursos.component.scss'
})
export class ProjetosECursosComponent {

}
