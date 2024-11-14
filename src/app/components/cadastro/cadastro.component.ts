import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ TesteComponent, FooterComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
