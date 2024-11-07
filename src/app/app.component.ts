import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TesteComponent } from './components/teste/teste.component';
import { CommonModule } from '@angular/common';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { GrandePainelComponent } from './components/grande-painel/grande-painel.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { JogoComponent } from './components/jogo/jogo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TesteComponent,
    CarrousselComponent,
    CommonModule,
    GrandePainelComponent,
    RouterLink,
    RouterLinkActive,
    CadastroComponent,
    JogoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
}
