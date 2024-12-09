import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Tecnico } from '../../models/tecnico';
import { TecnicoService } from '../../services/tecnico.service';

@Component({
  selector: 'app-admin-lista-tecnico',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-lista-tecnico.component.html',
  styleUrls: ['./admin-lista-tecnico.component.scss']
})
export class AdminListaTecnicoComponent implements OnInit {
  tecnicos: Tecnico[] = [];
  tecnicoForm: FormGroup;
  tecnicoEmEdicao: Tecnico | null = null;

  constructor(private fb: FormBuilder, private tecnicoService: TecnicoService) {
    this.tecnicoForm = this.fb.group({
      nome: [''],
      especialidade: ['']
    });
  }

  ngOnInit(): void {
    this.carregarTecnicos();
  }

  carregarTecnicos(): void {
    this.tecnicoService.findAll().subscribe({
      next: (tecnicos) => {
        this.tecnicos = tecnicos;
      },
      error: (error) => {
        console.error('Erro ao carregar técnicos:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.tecnicoEmEdicao) {
      this.salvarEdicao();
    } else {
      this.adicionarTecnico();
    }
  }

  adicionarTecnico(): void {
    const novoTecnico: Tecnico = this.tecnicoForm.value;
    this.tecnicoService.Salvar(novoTecnico).subscribe({
      next: () => {
        this.carregarTecnicos();
        this.tecnicoForm.reset();
      },
      error: (error) => {
        console.error('Erro ao adicionar técnico:', error);
      }
    });
  }

  editarTecnico(tecnico: Tecnico): void {
    this.tecnicoEmEdicao = tecnico;
    this.tecnicoForm.patchValue(tecnico);
  }

  salvarEdicao(): void {
    if (this.tecnicoEmEdicao) {
      const tecnicoAtualizado: Tecnico = {
        ...this.tecnicoEmEdicao,
        ...this.tecnicoForm.value
      };

      this.tecnicoService.update(tecnicoAtualizado).subscribe({
        next: () => {
          this.carregarTecnicos();
          this.tecnicoEmEdicao = null;
          this.tecnicoForm.reset();
        },
        error: (error) => {
          console.error('Erro ao atualizar técnico:', error);
        }
      });
    }
  }

  cancelarEdicao(): void {
    this.tecnicoEmEdicao = null;
    this.tecnicoForm.reset();
  }

  excluirTecnico(id: number): void {
    this.tecnicoService.deleteBYiD(id).subscribe({
      next: () => {
        this.carregarTecnicos();
      },
      error: (error) => {
        console.error('Erro ao excluir técnico:', error);
      }
    });
  }

  trackById(index: number, tecnico: Tecnico): number {
    return tecnico.id;
  }
  
  exibirCancelar(): boolean {
    return this.tecnicoEmEdicao !== null;
  }
}
