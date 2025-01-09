import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameModel } from '../../models/game-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mini-painel',
  standalone: true,
  imports: [],
  templateUrl: './mini-painel.component.html',
  styleUrl: './mini-painel.component.css'
})
export class MiniPainelComponent {
  @Input() jogo!: GameModel

  constructor(private router: Router) {}

  navegar() {
    // Verificar se já estamos na rota '/jogo'
    if (this.router.url === '/jogo') {
      // Atualizar o estado manualmente
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/jogo'], { state: { jogo: this.jogo } });
      });
    } else {
      // Navegar normalmente
      this.router.navigate(['/jogo'], { state: { jogo: this.jogo } });
    }
  }
  
  

}
