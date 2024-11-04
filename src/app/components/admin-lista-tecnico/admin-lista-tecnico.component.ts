import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Tecnico } from '../../models/tecnico';

@Component({
  selector: 'app-admin-lista-tecnico',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-lista-tecnico.component.html',
  styleUrl: './admin-lista-tecnico.component.scss'
})
export class AdminListaTecnicoComponent implements OnInit {
  tecnicos: Tecnico[] = [];
  tecnicoEmEdicaoId: number | null = null;
  tecnicoForm: FormGroup;
  mostrarFormulario: boolean = false; 

  constructor(private fb: FormBuilder) {
    this.tecnicoForm = this.fb.group({
      nome: [''],
      especialidade: ['']
    });
  }

  ngOnInit(): void {
    this.carregarTecnicos();
  }

  carregarTecnicos(): void {
    const tecnicosString = localStorage.getItem('tecnicos');
    if (tecnicosString) {
      this.tecnicos = JSON.parse(tecnicosString);
    } else {
      this.tecnicos = [
        { id: 1, nome: 'Carlos Silva', especialidade: 'Redes' },
        { id: 2, nome: 'Ana Santos', especialidade: 'Hardware' },
        { id: 3, nome: 'Pedro Lima', especialidade: 'Software' }
      ];
    }
  }

  salvarTecnicos(): void {
    localStorage.setItem('tecnicos', JSON.stringify(this.tecnicos));
  }

  toggleAdicionarTecnico(): void {
    this.mostrarFormulario = !this.mostrarFormulario; 
    if (!this.mostrarFormulario) {
      this.tecnicoForm.reset(); 
    }
  }

  adicionarTecnico(): void {
    const nome = this.tecnicoForm.get('nome')?.value;
    const especialidade = this.tecnicoForm.get('especialidade')?.value;

    if (nome && especialidade) {
      const novoTecnico: Tecnico = {
        id: this.tecnicos.length > 0 ? this.tecnicos[this.tecnicos.length - 1].id + 1 : 1,
        nome,
        especialidade
      };

      this.tecnicos.push(novoTecnico);
      this.salvarTecnicos();
      this.tecnicoForm.reset();
      this.mostrarFormulario = false; 
    }
  }

  editarTecnico(tecnico: Tecnico): void {
    this.tecnicoEmEdicaoId = tecnico.id; 
    this.tecnicoForm.patchValue({
      nome: tecnico.nome, 
      especialidade: tecnico.especialidade
    });
  }

  salvarEdicao(): void {
    if (this.tecnicoEmEdicaoId !== null) {
      const tecnicoIndex = this.tecnicos.findIndex(t => t.id === this.tecnicoEmEdicaoId);
      if (tecnicoIndex !== -1) {
      
        this.tecnicos[tecnicoIndex].nome = this.tecnicoForm.get('nome')?.value;
        this.tecnicos[tecnicoIndex].especialidade = this.tecnicoForm.get('especialidade')?.value;

        this.salvarTecnicos();
      }
      this.tecnicoEmEdicaoId = null;
      this.tecnicoForm.reset();
    }
  }

  cancelarEdicao(): void {
    this.tecnicoEmEdicaoId = null;
    this.tecnicoForm.reset();
  }

  excluirTecnico(id: number): void {
    console.log('Excluir Técnico com ID:', id);
    this.tecnicos = this.tecnicos.filter(tecnico => tecnico.id !== id);
    this.salvarTecnicos();
  }
}
