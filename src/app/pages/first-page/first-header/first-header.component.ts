import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './first-header.component.html',
  styleUrl: './first-header.component.scss'
})
export class FirstHeaderComponent {


  isMenuOpen = false;

}
