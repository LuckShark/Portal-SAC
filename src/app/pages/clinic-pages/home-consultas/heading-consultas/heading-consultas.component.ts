import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-heading-consultas',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './heading-consultas.component.html',
  styleUrl: './heading-consultas.component.scss'
})
export class HeadingConsultasComponent {

  constructor(private router: Router) {}

  navegar(rota: string) {
    this.router.navigate([`${rota}`])
  }

}
