import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from '../teste/teste.component';
import { MiniCarrousselComponent } from '../mini-carroussel/mini-carroussel.component';
import { setInterval } from 'node:timers';

@Component({
  selector: 'app-carroussel',
  standalone: true,
  imports: [CommonModule, TesteComponent, MiniCarrousselComponent],
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'] 
})

export class CarrousselComponent {
  currentIndex: number = 0;

  images: string[] = [
    "../../assets/imgs/image1.jpg",
    "../../assets/imgs/image2.jpg",
    "../../assets/imgs/image3.jpg",
    "../../assets/imgs/image4.jpg",
  ];
  
  getCurrentImageUrl(): string {
    return `url(${this.images[this.currentIndex]})`; 
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; 
  }

  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; 
  }
}