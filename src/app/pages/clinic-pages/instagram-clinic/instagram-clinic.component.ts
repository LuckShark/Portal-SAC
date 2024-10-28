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
  // posts = [
  //   { image: 'assets/img/clinic/ig-clinic/ig1.png', caption: 'A íris de cada pessoa', link: 'https://www.instagram.com/p/DBgmzOQxjiO/' },
  //   { image: 'assets/img/clinic/ig-clinic/ig2.png', caption: 'Atletas do Instituto', link: 'https://www.instagram.com/p/DBeB6-YR7BL/' },
  //   { image: 'assets/img/clinic/ig-clinic/ig3.png', caption: 'F1 Nas escolas', link: 'https://www.instagram.com/p/DBbdDynxXyf/' },
  //   { image: 'assets/img/clinic/ig-clinic/ig4.png', caption: '82 anos da SAC', link: 'https://www.instagram.com/p/DAn-LQ8O2zG/?img_index=1' },
  //   { image: 'assets/img/clinic/ig-clinic/ig5.png', caption: 'Função Macular', link: 'https://www.instagram.com/p/DAJFpMtutli/' },
  //   { image: 'assets/img/clinic/ig-clinic/ig6.png', caption: 'Dispositivos de VR', link: 'https://www.instagram.com/p/C_lJq-bu0h7/' },
  //   { image: 'assets/img/clinic/ig-clinic/ig7.png', caption: 'Catarata e cegueira', link: 'https://www.instagram.com/p/C_atdR2ujMR/' },
  //   { image: 'assets/img/clinic/ig-clinic/ig8.png', caption: 'Catarata e cegueira', link: 'https://www.instagram.com/p/C_akDWxuxgU/' },
  // ];

}
