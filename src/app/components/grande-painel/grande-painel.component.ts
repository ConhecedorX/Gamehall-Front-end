import { Component, ElementRef, ViewChild } from '@angular/core';
import { ColunaPaineisComponent } from '../coluna-paineis/coluna-paineis.component';

@Component({
  selector: 'app-grande-painel',
  standalone: true,
  imports: [ColunaPaineisComponent],
  templateUrl: './grande-painel.component.html',
  styleUrls: ['./grande-painel.component.css']
})
export class GrandePainelComponent {
  @ViewChild('scrollbar') scrollbar!: ElementRef;
  @ViewChild('section1') section1!: ElementRef;
  @ViewChild('section2') section2!: ElementRef;
  @ViewChild('section3') section3!: ElementRef;
  @ViewChild('section4') section4!: ElementRef;
  @ViewChild('section5') section5!: ElementRef;

  sectionsMap: { [key: string]: ElementRef } = {};

  ngAfterViewInit() {
    this.sectionsMap = {
      section1: this.section1,
      section2: this.section2,
      section3: this.section3,
      section4: this.section4,
      section5: this.section5
    };
  }

  scrollTo(section: string) {
    const targetSection = this.sectionsMap[section].nativeElement;
    const scrollbarContainer = this.scrollbar.nativeElement;

    scrollbarContainer.scrollTo({
      top: targetSection.offsetTop - scrollbarContainer.offsetTop,
      behavior: 'smooth'
    });
  }
}