import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import Vibrant from 'node-vibrant';

@Component({
  selector: 'app-jogo-info',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './jogo-info.component.html',
  styleUrls: ['./jogo-info.component.css']
})

export class JogoInfoComponent{

}

// export class JogoInfoComponent implements AfterViewInit {
//   @ViewChild('imageRef') imageRef!: ElementRef<HTMLImageElement>;
//   backgroundColor: string = 'transparent';
//   textColor: string = '#ffffff';

//   ngAfterViewInit() {
//     this.applyColors();
//   }

//   applyColors() {
//     const imgElement = this.imageRef.nativeElement;

//     if (imgElement.complete) {
//       this.extractColors(imgElement);
//     } else {
//       imgElement.addEventListener('load', () => this.extractColors(imgElement));
//     }
//   }

//   extractColors(imgElement: HTMLImageElement) {
//     Vibrant.from(imgElement)
//       .getPalette()
//       .then((palette) => {
//         if (palette) {
//           const vibrant = palette.Vibrant;
//           const darkVibrant = palette.DarkVibrant;
//           const lightVibrant = palette.LightVibrant;

//           if (vibrant && vibrant.rgb) {
//             const [r, g, b] = vibrant.rgb;
//             this.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//           }

//           if (vibrant && vibrant.rgb && darkVibrant && darkVibrant.rgb && lightVibrant && lightVibrant.rgb) {
//             const textColorPalette = this.isLightColor(vibrant.rgb) ? darkVibrant.rgb : lightVibrant.rgb;
//             this.textColor = `rgb(${textColorPalette[0]}, ${textColorPalette[1]}, ${textColorPalette[2]})`;
//           }
//         }
//       })
//       .catch((error) => console.error('Erro ao extrair as cores:', error));
//   }

//   isLightColor([r, g, b]: number[]): boolean {
//     const brightness = (r * 299 + g * 587 + b * 114) / 1000;
//     return brightness > 128;
//   }
// }