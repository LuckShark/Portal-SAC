import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-whatsapp-clinic',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatTooltip
  ],
  templateUrl: './whatsapp-clinic.component.html',
  styleUrl: './whatsapp-clinic.component.scss'
})
export class WhatsappClinicComponent {

}
