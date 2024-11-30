import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from '../teste/teste.component';
import { GameModel } from '../../models/game-model';
import { GameServicesService } from '../../services/game-services.service';
import { url } from 'node:inspector';

@Component({
  selector: 'app-carroussel',
  standalone: true,
  imports: [CommonModule, TesteComponent,],
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'] 
})

export class CarrousselComponent {
  
  constructor(private service: GameServicesService) {
  }

  jogos: GameModel[] = [];
  images: string[] = [];
  currentIndex: number = 0;
  jogo1: string = '';
  jogo2: string = '';
  jogo3: string = '';
  jogo4: string = '';
  
  ngOnInit() {
    // Supondo que você esteja carregando os jogos do serviço
    this.service.listarJogos().subscribe((data: GameModel[]) => {
      this.jogos = data;
      
      if (this.jogos && this.jogos.length >= 6) {
        this.jogo1 = this.jogos[0].jogoImagem;
        this.jogo2 = this.jogos[1].jogoImagem;
        this.jogo3 = this.jogos[2].jogoImagem;
        this.jogo4 = this.jogos[3].jogoImagem;

        this.images = [
          `${this.jogo1}`,
          `${this.jogo2}`,
          `${this.jogo3}`,
          `${this.jogo4}`,
        ];
      } else {
        console.error('A propriedade jogos está indefinida ou não contém elementos suficientes.');
      }
      // console.log(this.jogos);
      // console.log(this.jogo1);
    });
  }
  

  getCurrentImageUrl(): string {
    if (this.images && this.images.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.images.length) {
      return `url(${this.images[this.currentIndex]})`;
    } else {
      // console.error('Erro ao obter a URL da imagem atual: índice ou array de imagens inválido.');
      return '';
    }
  }

  changeCurrentImageUrl(indice: number){ 
    this.currentIndex = indice;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

