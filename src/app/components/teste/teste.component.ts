import { Component, NgModule, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { GameModel } from '../../models/game-model';
import { GameServicesService } from '../../services/game-services.service';
import { PLATFORM_ID, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  
  jogos: GameModel[] = [];
  jogosDisponiveis: string[] = ['Ação', 'Aventura', 'RPG', 'Comédia', 'Terror', 'Shooter', 'Estratégia', 'Luta'];
  jogosFiltrados: GameModel[] = [];
  categoriasSelecionadas: string[] = [];
  jogoPesquisa: string = '';
  dropdownAberto: boolean = false;

  constructor(
    private service: GameServicesService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.listarJogos().subscribe((data: GameModel[]) => {
      this.jogos = data;
    });
  }

  filtrarJogos() {
    const pesquisa = this.jogoPesquisa.trim().toLowerCase();
    if (pesquisa !== '') {
      this.jogosFiltrados = this.jogos.filter(jogo => 
        jogo.jogoNome.toLowerCase().startsWith(pesquisa)
      );
      this.dropdownAberto = true; // Abre o dropdown ao filtrar
    } else {
      this.jogosFiltrados = [];
      this.dropdownAberto = false; // Fecha o dropdown se não houver pesquisa
    }
  }

  navegar(jogo: GameModel) {
    if (this.router.url === '/jogo') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/jogo'], { state: { jogo: jogo } });
      });
    } else {
      this.router.navigate(['/jogo'], { state: { jogo: jogo } });
    }
  }

  @HostListener('document:click', ['$event'])
  fecharDropdown(event: Event) {
    const target = event.target as HTMLElement;

    // Verifica se o clique foi fora da caixa de texto ou do dropdown
    if (!target.closest('.searchBar') && this.dropdownAberto) {
      this.jogosFiltrados = [];
      this.dropdownAberto = false;
    }
  }
}
