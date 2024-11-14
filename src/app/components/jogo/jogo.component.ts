import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';
import { JogoInfoComponent } from '../jogo-info/jogo-info.component';
import { FooterComponent } from '../footer/footer.component';
import { SugestaoJogoComponent } from '../sugestao-jogo/sugestao-jogo.component';

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [TesteComponent, JogoInfoComponent, FooterComponent, SugestaoJogoComponent ],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.css'
})
export class JogoComponent {

}
