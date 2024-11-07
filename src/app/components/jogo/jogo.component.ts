import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';
import { CommonModule } from '@angular/common';
import { JogoInfoComponent } from '../jogo-info/jogo-info.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [TesteComponent, CommonModule, JogoInfoComponent, FooterComponent],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.css'
})
export class JogoComponent {

}
