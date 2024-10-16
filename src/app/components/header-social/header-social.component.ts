import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header-social',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './header-social.component.html',
  styleUrl: './header-social.component.scss'
})
export class HeaderSocialComponent {

  constructor(private router: Router) {}

  navegar(rota: string) {
    this.router.navigate([`${rota}`])
  }

}
