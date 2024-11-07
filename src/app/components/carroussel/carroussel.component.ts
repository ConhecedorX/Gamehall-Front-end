import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from '../teste/teste.component';
import { MiniCarrousselComponent } from '../mini-carroussel/mini-carroussel.component';
import { MiniPainelComponent } from '../mini-painel/mini-painel.component';
import { setInterval } from 'node:timers';

@Component({
  selector: 'app-carroussel',
  standalone: true,
  imports: [CommonModule, TesteComponent, MiniCarrousselComponent, MiniPainelComponent],
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'] // Fixed here
})
export class CarrousselComponent {
  currentIndex: number = 0;

  images: string[] = [
    "../../assets/imgs/image1.jpg",
    "../../assets/imgs/image2.jpg",
    "../../assets/imgs/image3.jpg",
    "../../assets/imgs/image4.jpg",
  ];
  
  // automatico (interval: number = 5000) {
  //   setInterval(() => {
  //     this.getCurrentImageUrl()
  //   }, interval)
  // }

  getCurrentImageUrl(): string {
    return `url(${this.images[this.currentIndex]})`; // Ensure it's a valid URL format
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; // Cycle through images
  }

  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; // Cycle back
  }
}