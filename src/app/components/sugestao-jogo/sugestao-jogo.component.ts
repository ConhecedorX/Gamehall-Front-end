import { Component, ElementRef, ViewChild, QueryList, ViewChildren, Inject, PLATFORM_ID, } from '@angular/core';
import { MiniPainelComponent } from '../mini-painel/mini-painel.component';
import { CommonModule } from '@angular/common';
import { GameModel } from '../../models/game-model';
import { GameServicesService } from '../../services/game-services.service';

@Component({
  selector: 'app-sugestao-jogo',
  standalone: true,
  imports: [MiniPainelComponent, CommonModule],
  templateUrl: './sugestao-jogo.component.html',
  styleUrls: ['./sugestao-jogo.component.css']
})
export class SugestaoJogoComponent {

  jogo: GameModel [] = []
  grupoJogos: GameModel [][] = []
  scrollAmount: number = 1460;

  constructor(private service: GameServicesService,
    @Inject(PLATFORM_ID) private platformId: Object // Injetar a plataforma
    ) {}

  ngOnInit(): void {
    this.service.listarJogos().subscribe((data: GameModel[]) => {
      this.jogo = data;
      // console.log('sugestão de jogo recebida:', this.jogo)
      this.grupoJogos = [];
      for (let i = 0; i < this.jogo.length; i += 6) {
       this.grupoJogos.push(this.jogo.slice(i, i + 6));
      }
    })
  }

//   ngOnChanges(): void {
//      // console.log('Jogos recebidos:', this.jogosPaineis);
//      // console.log('Grupo de Jogos:', this.grupoJogos);
//  }

  currentColumn: number = 0;

  columns: string[] = [
    "coluna1",
    "coluna2",
    "coluna3"
  ];

  @ViewChild('colunaContainer') colunaContainer!: ElementRef;

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


// nextColumn(): void {
//   this.currentColumn = (this.currentColumn + 1) % this.columns.length;
//   this.scrollToCurrentColumn();
// }

// previousColumn(): void {
//   this.currentColumn = (this.currentColumn - 1 + this.columns.length) % this.columns.length;
//   this.scrollToCurrentColumn();
// }

// private scrollToCurrentColumn(): void {
//   const coluna = this.colunas.toArray()[this.currentColumn];
//   if (coluna) {
//     coluna.nativeElement.scrollIntoView({ behavior: 'smooth' });
//   }
// }