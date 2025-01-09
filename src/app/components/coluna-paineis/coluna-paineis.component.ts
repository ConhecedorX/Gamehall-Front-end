import { Component, ElementRef, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { MiniPainelComponent } from '../mini-painel/mini-painel.component';
import { CommonModule } from '@angular/common';
import { GameModel } from '../../models/game-model';
import { GrandePainelComponent } from '../grande-painel/grande-painel.component';

@Component({
  selector: 'app-coluna-paineis',
  standalone: true,
  imports: [MiniPainelComponent, CommonModule],
  templateUrl: './coluna-paineis.component.html',
  styleUrl: './coluna-paineis.component.css'
})

export class ColunaPaineisComponent {

  @Input() jogosPaineis: GameModel [] = [];
  grupoJogos: GameModel [][] = [];

  @ViewChild('colunaContainer') colunaContainer!: ElementRef;

  scrollAmount: number = 1460;

  ngOnChanges(): void {
     this.grupoJogos = [];
     for (let i = 0; i < this.jogosPaineis.length; i += 6) {
      this.grupoJogos.push(this.jogosPaineis.slice(i, i + 6));
     }
      // console.log('Jogos recebidos:', this.jogosPaineis);
      // console.log('Grupo de Jogos:', this.grupoJogos);
  }

  scrollRight(): void {
    if (this.colunaContainer) {
      this.colunaContainer.nativeElement.scrollLeft += this.scrollAmount;
    }
    
  }

  scrollLeft(): void {
    if (this.colunaContainer) {
      this.colunaContainer.nativeElement.scrollLeft -= this.scrollAmount;
    }
  }
}
