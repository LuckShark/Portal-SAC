import { Component } from '@angular/core';
import { CarrosselComponent } from "../../../shared/carrossel/carrossel.component";
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-hero-home-clinic',
  standalone: true,
  imports: [CarrosselComponent, CommonModule, NgOptimizedImage, MatButtonModule, MatTabsModule],
  templateUrl: './hero-home-clinic.component.html',
  styleUrl: './hero-home-clinic.component.scss'
})
export class HeroHomeClinicComponent {

}
