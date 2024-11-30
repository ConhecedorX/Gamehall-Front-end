import { Component, } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';
import { JogoInfoComponent } from '../jogo-info/jogo-info.component';
import { FooterComponent } from '../footer/footer.component';
import { SugestaoJogoComponent } from '../sugestao-jogo/sugestao-jogo.component';
import { GameModel } from '../../models/game-model';
import { GameServicesService } from '../../services/game-services.service';

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [TesteComponent, JogoInfoComponent, FooterComponent, SugestaoJogoComponent ],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.css'
})
export class JogoComponent {
  constructor (private service: GameServicesService) {
    
  }
  
  jogos: GameModel [] = []
  ngOnInit(){
    this.service.listarJogos().subscribe(jogos => {
      this.jogos = jogos
    }
    )
  }

}
