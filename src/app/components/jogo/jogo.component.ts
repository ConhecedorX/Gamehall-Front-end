import { Component, } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';
import { JogoInfoComponent } from '../jogo-info/jogo-info.component';
import { FooterComponent } from '../footer/footer.component';
import { SugestaoJogoComponent } from '../sugestao-jogo/sugestao-jogo.component';
import { GameModel } from '../../models/game-model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [TesteComponent, JogoInfoComponent, FooterComponent, SugestaoJogoComponent ],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.css'
})
export class JogoComponent {
  constructor (private router: Router,) {}
  
  
  jogo!: GameModel

  ngOnInit(): void{
    const navigation = window.history.state;
    // console.log('Estado completo recebido:', navigation);
    this.jogo = navigation.jogo || null;

    // console.log('jogo recebido:', this.jogo);
    if (!this.jogo) {
      console.error('Nenhum jogo recebido. Redirecionando para outra página');
      this.router.navigate(['/inicio'])
    }
  }

}
