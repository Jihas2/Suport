import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.scss'
})
export class ListaUsuarioComponent {

  comentarios = [
    { texto: 'Ótimo suporte!', autor: 'Isabelle Cunhã' },
    { texto: 'A equipe é muito eficiente!', autor: 'Carlos Ribeiro' },
    { texto: 'Fiquei muito satisfeito com o atendimento.', autor: 'Fernanda Silva' },
    { texto: 'Atendimento rápido e eficaz!', autor: 'João Pedro' },
    { texto: 'Excelente experiência!', autor: 'Maria Gomes' },
    { texto: 'Profissionais muito atenciosos.', autor: 'Lucas da Silva' },
    { texto: 'Resolveram meu problema rapidamente.', autor: 'Felipe Mengue' },
    { texto: 'Sempre dispostos a ajudar.', autor: 'Roberto Brasil' },
    { texto: 'Recomendo a todos!', autor: 'Patrícia Cristina' },
    { texto: 'Estou muito satisfeito com o serviço.', autor: 'Ricardo Nunes' }
  ];
}