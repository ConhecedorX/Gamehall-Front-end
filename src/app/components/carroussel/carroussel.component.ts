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
  console.log(this.jogos)
}

currentIndex: number = 0;

  images: string [] = [

    "https://wallpapers.com/images/hd/red-dead-redemption-2-wallpaper-sfzd0d05qk6k0sja.jpg",
    "https://virtualbackgrounds.site/wp-content/uploads/2020/11/the-witcher-3-wild-hunt-kaer-morhen.jpg",
    "https://wallpaperset.com/w/full/0/9/1/209465.jpg",
    "https://images4.alphacoders.com/655/655417.jpg"
    
    // `${this.jogos[5].jogoImagem}`,
    // `${this.jogos[2].jogoImagem}`,
    // `${this.jogos[4].jogoImagem}`,
    // `${this.jogos[1].jogoImagem}`,
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