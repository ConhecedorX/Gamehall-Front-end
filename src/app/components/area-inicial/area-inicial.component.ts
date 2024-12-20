import { Component } from '@angular/core';
import { CarrousselComponent } from '../carroussel/carroussel.component';
import { GrandePainelComponent } from '../grande-painel/grande-painel.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-area-inicial',
  standalone: true,
  imports: [ CarrousselComponent, GrandePainelComponent, FooterComponent ],
  templateUrl: './area-inicial.component.html',
  styleUrl: './area-inicial.component.css'
})
export class AreaInicialComponent {

}