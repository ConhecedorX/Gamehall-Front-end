import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from '../teste/teste.component';
import { GameModel } from '../../models/game-model';
import { GameServicesService } from '../../services/game-services.service';
import { url } from 'node:inspector';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-carroussel',
  standalone: true,
  imports: [CommonModule, TesteComponent,],
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css'] 
})

export class CarrousselComponent {
  
  constructor(private service: GameServicesService,
  @Inject(PLATFORM_ID) private platformId: Object // Injetar a plataforma
  ) {}

  jogos: GameModel[] = [];
  images: string[] = [];
  indices: number [] = []
  currentIndex: number = 0;
  autoSlideInterval: any; // Para armazenar o ID do intervalo
  maxIndex: number = this.jogos.length;
  progress: number = 0;


  ngOnInit() {
    // Supondo que você esteja carregando os jogos do serviço
    this.service.listarJogos().subscribe((data: GameModel[]) => {
      this.jogos = data;

      if (this.jogos && this.jogos.length >= 6) {
        this.gerarIndices(this.jogos.length)
        
        this.images = [
          this.jogos[this.indices[0]].jogoImagem,
          this.jogos[this.indices[1]].jogoImagem,
          this.jogos[this.indices[2]].jogoImagem,
          this.jogos[this.indices[3]].jogoImagem,
        ];
      } else {
        console.error('A propriedade jogos está indefinida ou não contém elementos suficientes.');
      }
    });

    // Inicia o timer para trocar as imagens automaticamente
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    // Limpa o intervalo ao destruir o componente
    this.stopAutoSlide();
  }

  gerarIndices(maxIndex: number): void {
    // Cria um array de índices de 0 até maxIndex - 1
    const indicesDisponiveis = Array.from({ length: maxIndex }, (_, i) => i);
  
    // Embaralha os índices usando o algoritmo de Fisher-Yates
    for (let i = indicesDisponiveis.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indicesDisponiveis[i], indicesDisponiveis[j]] = [indicesDisponiveis[j], indicesDisponiveis[i]];
    }
  
    // Seleciona os primeiros 4 índices únicos
    this.indices = indicesDisponiveis.slice(0, 4);
  }

  getCurrentImageUrl(): string {
    if (this.images && this.images.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.images.length) {
      return `url(${this.images[this.currentIndex]})`;
    } else {
      return '';
    }
  }

  changeCurrentImageUrl(indice: number) {
    this.currentIndex = indice;
    clearInterval(this.autoSlideInterval)
      this.startAutoSlide()
  }

  getImageUrl(indice: number): string {
    return this.images[indice];
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }


  nextImageBtn(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    clearInterval(this.autoSlideInterval)
      this.startAutoSlide()
  }

  previousImageBtn(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    clearInterval(this.autoSlideInterval)
      this.startAutoSlide()
  }

  // Inicia o auto-slide
  startAutoSlide(): void {
    const intervalDuration = 15000;
    const progressStep = 100 / (intervalDuration / 100);

    this.progress = 0;
    this.autoSlideInterval = setInterval(() => {
      this.progress += progressStep;

      if (this.progress >= 100) {
        this.progress = 0;
        this.nextImage();  
      }
    }, 100); // Atualiza a cada 100ms
  }

  // Para o auto-slide
  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  resetAutoSlide(): void {
    this.stopAutoSlide;
      this.startAutoSlide;
  }
}

