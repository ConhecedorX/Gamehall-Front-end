import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { MiniPainelComponent } from '../mini-painel/mini-painel.component';
import { ColunaPaineisComponent } from '../coluna-paineis/coluna-paineis.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-grande-painel',
  standalone: true,
  imports: [ColunaPaineisComponent ],
  templateUrl: './grande-painel.component.html',
  styleUrl: './grande-painel.component.css'
})
export class GrandePainelComponent {
  @ViewChild('section1') section1!: ElementRef;
  @ViewChild('section2') section2!: ElementRef;
  @ViewChild('section3') section3!: ElementRef;
  @ViewChild('section4') section4!: ElementRef;
  @ViewChild('section5') section5!: ElementRef;
  
  scrollTo(section: string){
    switch(section) {
      case 'section1':
        this.section1.nativeElement.scrollIntoView({behavior:'smooth'});
      break;
      case 'section2':
        this.section2.nativeElement.scrollIntoView({behavior:'smooth'});
      break;
      case 'section3':
        this.section3.nativeElement.scrollIntoView({behavior:'smooth'});
      break;
      case 'section4':
        this.section4.nativeElement.scrollIntoView({behavior:'smooth'});
      break;
      case 'section5':
        this.section5.nativeElement.scrollIntoView({behavior:'smooth'});
      break;
    }
  }
}