import { provideRouter, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ApplicationConfig } from '@angular/core';
import { AreaInicialComponent } from './components/area-inicial/area-inicial.component';
import { JogoComponent } from './components/jogo/jogo.component';

export const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'inicio', component: AreaInicialComponent },
  { path: 'jogo', component: JogoComponent }

];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
}