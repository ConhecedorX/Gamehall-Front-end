import { Component, ElementRef, ViewChild } from '@angular/core';
import { ColunaPaineisComponent } from '../coluna-paineis/coluna-paineis.component';
import { GameModel } from '../../models/game-model';
import { GameServicesService } from '../../services/game-services.service';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-grande-painel',
  standalone: true,
  imports: [ColunaPaineisComponent],
  templateUrl: './grande-painel.component.html',
  styleUrls: ['./grande-painel.component.css']
})
export class GrandePainelComponent {

  constructor(private service: GameServicesService,
    @Inject(PLATFORM_ID) private platformId: Object // Injetar a plataforma
    ) {}

  jogosPaineis: GameModel [] = []
  jogosAcao: GameModel [] = []
  jogosLuta: GameModel [] = []
  jogosRpg: GameModel [] = []
  jogosShooter: GameModel [] = []
  jogosTerror: GameModel [] = []

  ngOnInit() {
    this.service.listarJogos().subscribe((data: GameModel[]) => {
      this.jogosPaineis = data;

    this.jogosAcao = this.jogosPaineis.filter(jogo => jogo.genero === 'AÇÃO');
    this.jogosLuta = this.jogosPaineis.filter(jogo => jogo.genero === 'LUTA');
    this.jogosRpg = this.jogosPaineis.filter(jogo => jogo.genero === 'RPG');
    this.jogosShooter = this.jogosPaineis.filter(jogo => jogo.genero === 'SHOOTER');
    this.jogosTerror = this.jogosPaineis.filter(jogo => jogo.genero === 'TERROR');

    // console.log(this.jogosRpg);
    })
    
  }


  @ViewChild('scrollbar') scrollbar!: ElementRef;
  @ViewChild('section1') section1!: ElementRef;
  @ViewChild('section2') section2!: ElementRef;
  @ViewChild('section3') section3!: ElementRef;
  @ViewChild('section4') section4!: ElementRef;
  @ViewChild('section5') section5!: ElementRef;

  sectionsMap: { [key: string]: ElementRef } = {};

  ngAfterViewInit() {
    this.sectionsMap = {
      section1: this.section1,
      section2: this.section2,
      section3: this.section3,
      section4: this.section4,
      section5: this.section5
    };
  }

  scrollTo(section: string) {
    const targetSection = this.sectionsMap[section].nativeElement;
    const scrollbarContainer = this.scrollbar.nativeElement;

    scrollbarContainer.scrollTo({
      top: targetSection.offsetTop - scrollbarContainer.offsetTop,
      behavior: 'smooth'
    });
  }
}