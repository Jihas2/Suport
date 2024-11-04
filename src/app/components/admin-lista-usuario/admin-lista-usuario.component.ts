import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-admin-lista-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-lista-usuario.component.html',
  styleUrl: './admin-lista-usuario.component.scss'
})
export class AdminListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioEmEdicaoId: number | null = null;
  usuarioForm: FormGroup;
  formularioVisivel: boolean = false;

  constructor(private fb: FormBuilder) {
    
    this.usuarioForm = this.fb.group({
      nome: [''], 
      email: [''] 
    });
  }

  ngOnInit(): void {
    this.carregarUsuarios(); 
  }

  carregarUsuarios(): void {
    const usuariosString = localStorage.getItem('usuarios');
    if (usuariosString) {
      this.usuarios = JSON.parse(usuariosString);
    } else {
      
      this.usuarios = [
        { id: 1, nome: 'João Silva', email: 'joao.silva@example.com' },
        { id: 2, nome: 'Maria Santos', email: 'maria.santos@example.com' },
        { id: 3, nome: 'Lucas Lima', email: 'lucas.lima@example.com' }
      ];
    }
  }

  salvarUsuarios(): void {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios)); 
  }

  
  mostrarFormulario(): void {
    this.formularioVisivel = true;
    this.usuarioForm.reset(); 
  }

  cancelarAdicionar(): void {
    this.formularioVisivel = false;
    this.usuarioForm.reset(); 
  }

  adicionarUsuario(): void {
    const nome = this.usuarioForm.get('nome')?.value;
    const email = this.usuarioForm.get('email')?.value;

    if (nome && email) { 
      const novoUsuario: Usuario = {
        id: this.usuarios.length > 0 ? this.usuarios[this.usuarios.length - 1].id + 1 : 1, 
        nome,
        email
      };

      this.usuarios.push(novoUsuario); 
      this.salvarUsuarios();
      this.cancelarAdicionar();
    }
  }

  editarUsuario(usuario: Usuario): void {
    this.usuarioEmEdicaoId = usuario.id;
    this.usuarioForm.patchValue({
      nome: usuario.nome,
      email: usuario.email
    });
  }

  salvarEdicao(): void {
    if (this.usuarioEmEdicaoId !== null) {
      const usuarioIndex = this.usuarios.findIndex(u => u.id === this.usuarioEmEdicaoId);
      if (usuarioIndex !== -1) {
        
        this.usuarios[usuarioIndex].nome = this.usuarioForm.get('nome')?.value;
        this.usuarios[usuarioIndex].email = this.usuarioForm.get('email')?.value;

        this.salvarUsuarios();
      }
      this.usuarioEmEdicaoId = null; 
      this.usuarioForm.reset();
    }
  }

  cancelarEdicao(): void {
    this.usuarioEmEdicaoId = null; 
    this.usuarioForm.reset();
  }

  excluirUsuario(id: number): void {
    console.log('Excluir Usuário com ID:', id);
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id); 
    this.salvarUsuarios(); 
  }
}
