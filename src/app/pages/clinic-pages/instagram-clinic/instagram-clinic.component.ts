import { CommonModule, NgFor } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-instagram-clinic',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './instagram-clinic.component.html',
  styleUrls: ['./instagram-clinic.component.scss']
})
export class InstagramClinicComponent {
  

}
