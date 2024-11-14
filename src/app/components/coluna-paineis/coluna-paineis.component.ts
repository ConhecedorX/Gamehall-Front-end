import { Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MiniPainelComponent } from '../mini-painel/mini-painel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coluna-paineis',
  standalone: true,
  imports: [MiniPainelComponent, CommonModule],
  templateUrl: './coluna-paineis.component.html',
  styleUrl: './coluna-paineis.component.css'
})

export class ColunaPaineisComponent {
  @ViewChild('colunaContainer') colunaContainer!: ElementRef;

  scrollAmount: number = 1460;

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



// export class ColunaPaineisComponent {
//   currentColumn: number = 0;

//   columns: string[] = [
//     "coluna1",
//     "coluna2",
//     "coluna3"
//   ];

//   @ViewChildren('coluna') colunas!: QueryList<ElementRef>;

//   nextColumn(): void {
//     this.currentColumn = (this.currentColumn + 1) % this.columns.length;
//     this.scrollToCurrentColumn();
//   }

//   previousColumn(): void {
//     this.currentColumn = (this.currentColumn - 1 + this.columns.length) % this.columns.length;
//     this.scrollToCurrentColumn();
//   }

//   private scrollToCurrentColumn(): void {
//     const coluna = this.colunas.toArray()[this.currentColumn];
//     if (coluna) {
//       coluna.nativeElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// }
