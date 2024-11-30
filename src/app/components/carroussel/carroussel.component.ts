import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from '../teste/teste.component';
import { MiniCarrousselComponent } from '../mini-carroussel/mini-carroussel.component';
import { setInterval } from 'node:timers';
import { GameModel } from '../../models/game-model';
import { GameServicesService } from '../../services/game-services.service';

@Component({
  selector: 'app-carroussel',
  standalone: true,
  imports: [CommonModule, TesteComponent, MiniCarrousselComponent],
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'] 
})

export class CarrousselComponent {
  
  constructor (private service: GameServicesService) {
  }
  jogos: GameModel [] = []
  ngOnInit(){
    this.service.listarJogos().subscribe(jogos => {
      this.jogos = jogos
    }
  )
  console.log(this.jogos[0].jogoImagem)
}

currentIndex: number = 0;

  images: string [] = [
    `${this.jogos[5].jogoImagem}`,
    `${this.jogos[2].jogoImagem}`,
    `${this.jogos[4].jogoImagem}`,
    `${this.jogos[1].jogoImagem}`,
  ]

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