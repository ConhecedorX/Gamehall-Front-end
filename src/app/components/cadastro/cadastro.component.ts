import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ TesteComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
