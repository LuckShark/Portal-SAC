import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-whatsapp-school',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatTooltip
  ],
  templateUrl: './whatsapp-school.component.html',
  styleUrl: './whatsapp-school.component.scss'
})
export class WhatsappSchoolComponent {

}
