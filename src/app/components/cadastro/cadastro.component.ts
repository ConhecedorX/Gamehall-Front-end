import { Component, NgModule } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ TesteComponent, FooterComponent, CommonModule, FormsModule,],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  
  categoriasDisponiveis: string [] = ['Ação', 'Aventura', 'RPG', 'Comédia', 'Terror', 'Shooter', 'Estratégia', 'Luta']
  categoriasFiltradas: string [] = [];
  categoriasSelecionadas: string [] = [];
  categoriaPesquisa: string = '';

  filtrarCategorias() {
    const pesquisa = this.categoriaPesquisa.trim().toLowerCase();
    if(pesquisa !== '') {
      this.categoriasFiltradas = this.categoriasDisponiveis.filter(categoria => 
        categoria.toLowerCase().startsWith(pesquisa)
      );
    } else {
      this.categoriasFiltradas = [];
    }
    
  }

  adicionarCategoria(categoria: string): void {
    console.log(`Categoria adicionada: ${categoria}`);
    this.categoriasSelecionadas.push(categoria);
    this.categoriasDisponiveis.splice(this.categoriasDisponiveis.indexOf(categoria), 1)
  
    this.categoriaPesquisa = '';
  
    this.categoriasFiltradas = [];
  }

  removerCategoria(categoria: string) {
    this.categoriasSelecionadas = this.categoriasSelecionadas.filter(c => c !== categoria);
    this.categoriasDisponiveis.push(categoria);
  }

  enviarFormulario(form: NgForm) {
    if (form.valid) {
      const jogo = {
        nome: form.value.jogoNome, 
        desenvolvedor: form.value.jogoNomeEstudio, 
        distribuidora: form.value.estudioJogo, 
        dataLancamento: form.value.dataLancamento, 
        descricao: form.value.descricaoJogo, 
        nota: form.value.nota, 
        categorias: this.categoriasSelecionadas, 
        imagem: this.imageSrc 

        // adicionar as outras infos do formulário se precisar!
      };
      console.log(jogo);
    } else {
      console.log('Formulário inválido');
    }
  }




  imageSrc: string | ArrayBuffer | null = null;

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageSrc = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
