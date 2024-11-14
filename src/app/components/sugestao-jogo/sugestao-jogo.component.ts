import { Component, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { MiniPainelComponent } from '../mini-painel/mini-painel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sugestao-jogo',
  standalone: true,
  imports: [MiniPainelComponent, CommonModule],
  templateUrl: './sugestao-jogo.component.html',
  styleUrls: ['./sugestao-jogo.component.css']
})
export class SugestaoJogoComponent {
  currentColumn: number = 0;

  columns: string[] = [
    "coluna1",
    "coluna2",
    "coluna3"
  ];

  @ViewChildren('coluna') colunas!: QueryList<ElementRef>;

  nextColumn(): void {
    this.currentColumn = (this.currentColumn + 1) % this.columns.length;
    this.scrollToCurrentColumn();
  }

  previousColumn(): void {
    this.currentColumn = (this.currentColumn - 1 + this.columns.length) % this.columns.length;
    this.scrollToCurrentColumn();
  }

  private scrollToCurrentColumn(): void {
    const coluna = this.colunas.toArray()[this.currentColumn];
    if (coluna) {
      coluna.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}