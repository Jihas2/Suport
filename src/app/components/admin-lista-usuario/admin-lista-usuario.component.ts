import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-admin-lista-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-lista-usuario.component.html',
  styleUrls: ['./admin-lista-usuario.component.scss']
})
export class AdminListaUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioForm: FormGroup;
  usuarioEmEdicao: Usuario | null = null;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.usuarioForm = this.fb.group({
      nome: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.usuarioService.findAll().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (error) => {
        console.error('Erro ao carregar usuários:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.usuarioEmEdicao) {
      this.salvarEdicao();
    } else {
      this.adicionarUsuario();
    }
  }

  adicionarUsuario(): void {
    const novoUsuario: Usuario = this.usuarioForm.value; // Certifique-se de que isso está correto
    this.usuarioService.salvar(novoUsuario).subscribe({
      next: () => {
        this.carregarUsuarios(); // Atualiza a lista de usuários
        this.usuarioForm.reset();
      },
      error: (error) => {
        console.error('Erro ao adicionar usuário:', error);
      }
    });
  }

  editarUsuario(usuario: Usuario): void {
    this.usuarioEmEdicao = usuario;
    this.usuarioForm.patchValue(usuario);
  }

  salvarEdicao(): void {
    if (this.usuarioEmEdicao) {
      const usuarioAtualizado: Usuario = {
        ...this.usuarioEmEdicao,
        ...this.usuarioForm.value
      };

      this.usuarioService.update(usuarioAtualizado).subscribe({
        next: () => {
          this.carregarUsuarios();
          this.usuarioEmEdicao = null;
          this.usuarioForm.reset();
        },
        error: (error) => {
          console.error('Erro ao atualizar usuário:', error);
        }
      });
    }
  }

  cancelarEdicao(): void {
    this.usuarioEmEdicao = null;
    this.usuarioForm.reset();
  }

  excluirUsuario(id: number): void {
    this.usuarioService.deleteById(id).subscribe({
      next: () => {
        this.carregarUsuarios(); // Atualiza a lista de usuários
      },
      error: (error) => {
        console.error('Erro ao excluir usuário:', error);
      }
    });
  }

  trackById(index: number, usuario: Usuario): number {
    return usuario.id; // Retorna o id do usuário
  }
  
  exibirCancelar(): boolean {
    return this.usuarioEmEdicao !== null;
  }
}
