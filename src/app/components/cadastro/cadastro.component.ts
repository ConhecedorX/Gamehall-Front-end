import { Component, NgModule } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ TesteComponent, FooterComponent, CommonModule, FormsModule,],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private router: Router) {}
  
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
    if (this.categoriasSelecionadas.length < 2){
      console.log(`Categoria adicionada: ${categoria}`);
      this.categoriasSelecionadas.push(categoria);
      this.categoriasDisponiveis.splice(this.categoriasDisponiveis.indexOf(categoria), 1)
    
      this.categoriaPesquisa = '';
    
      this.categoriasFiltradas = [];
    }
  }

  removerCategoria(categoria: string) {
    this.categoriasSelecionadas = this.categoriasSelecionadas.filter(c => c !== categoria);
    this.categoriasDisponiveis.push(categoria);
  }

  enviarFormulario(form: NgForm) {
    if (form.valid) {
      const jogo = {
        jogo_nome: form.value.jogoNome, 
        jogo_estudio: form.value.jogoNomeEstudio, 
        jogo_distribuidora: form.value.estudioJogo, 
        jogo_descricao: form.value.descricaoJogo, 
        jogo_imagem: form.value.imagemJogo,
        plataforma: form.value.plataforma,
        genero: this.categoriasSelecionadas[0],
        sub_genero: this.categoriasSelecionadas[1], 
        data: form.value.dataLancamento,
        nota: form.value.nota
        // adicionar as outras infos do formulário se precisar!
      };
      console.log(jogo);
    } else {
      console.log('Formulário inválido');
    }
  }

  imageSrc: string | ArrayBuffer | null = null;
  errorMessage: string | null = null;

  // Função para validar o URL da imagem
  onUrlEntered(event: Event): void {
    const input = event.target as HTMLInputElement;
    const url = input.value;
    

    if (!url) {
      this.errorMessage = null;
      this.imageSrc = null;
      return;
    }

    // Verificar se a URL é válida e é uma imagem
    if (this.isValidImageUrl(url)) {
      this.checkImageResolution(url);
    } else {
      this.errorMessage = 'URL inválido ou não é uma imagem.';
      this.imageSrc = null;
    }
  }

  // Verificar se a URL é uma imagem válida
  isValidImageUrl(url: string): boolean {
    const validImageExtensions = ['jpg', 'jpeg', 'png', 'bmp'];
    const extension = url.split('.').pop()?.toLowerCase();
    return validImageExtensions.includes(extension || '');
  }

  // Verificar a resolução da imagem
  checkImageResolution(url: string): void {
    const img = new Image();
    img.onload = () => {
      if (img.width === 1920 && img.height === 1080) {
        this.imageSrc = url;
        this.errorMessage = null; // Limpar mensagens de erro
      } else {
        this.errorMessage = 'A resolução da imagem deve ser 1920x1080.';
        this.imageSrc = null;
      }
    };
    img.onerror = () => {
      this.errorMessage = 'Erro ao carregar a imagem.';
      this.imageSrc = null;
    };
    img.src = url; // Inicia o carregamento da imagem
  }

  clearSelection(): void {
    this.imageSrc = null;       // Limpa a pré-visualização da imagem
    this.errorMessage = null;   // Limpa a mensagem de erro, se houver
    const urlInput = document.getElementById('imagemUrl') as HTMLInputElement;
    urlInput.value = '';        // Limpa o campo de URL
  }

  showSuccessMessage: boolean = false;
  formErrorMessage: string | null = null;

  formData = {
    jogo_nome: '',
    jogo_estudio: '',
    jogo_distribuidora: '',
    jogo_descricao: '',
    jogo_imagem: '',
    plataforma: '',
    genero: '',
    sub_genero: '',
    data: '',
    nota: '',
  }

  formIsValid(): boolean {
    if (!this.formData.jogo_nome) return this.setErrorMessage('O campo nome do jogo é obrigatório.');
    if (!this.formData.jogo_estudio) return this.setErrorMessage('O campo estúdio é obrigatório.');
    if (!this.formData.jogo_distribuidora) return this.setErrorMessage('O campo distribuidora é obrigatório.');
    if (!this.formData.jogo_descricao) return this.setErrorMessage('O campo descrição é obrigatório.');
    if (!this.formData.jogo_imagem || !this.isValidImageUrl(this.formData.jogo_imagem)) {
      return this.setErrorMessage('A URL da imagem é inválida ou está ausente.');
    }
    if (this.categoriasSelecionadas.length < 2) return this.setErrorMessage('Selecione dois gêneros.');
    if (!this.formData.plataforma) return this.setErrorMessage('O campo plataforma é obrigatório.');
    if (!this.formData.data) return this.setErrorMessage('O campo data de lançamento é obrigatório.');
    if (!this.formData.nota) return this.setErrorMessage('O campo nota é obrigatório.');

    this.formErrorMessage = null;
    return true;
  }

  // Define mensagem de erro
  setErrorMessage(message: string): boolean {
    this.formErrorMessage = message;
    return false;
  }

  onSubmit(): void {
    if (this.formIsValid()) {

      const jogo = { ...this.formData, genero: this.categoriasSelecionadas[0], sub_genero: this.categoriasSelecionadas[1] };
      console.log('Formulário enviado:', jogo);

      this.showSuccessMessage = true;
    } else {
      this.showSuccessMessage = false;
    }
  }

  closeMessage(): void {
    this.showSuccessMessage = false;
  }
  
  closeErrorMessage(): void {
    this.formErrorMessage = null;
  }

  newGame() {
    window.location.reload();
  }

  returnHome() {
    this.router.navigate(['/inicio'])
  }
}
