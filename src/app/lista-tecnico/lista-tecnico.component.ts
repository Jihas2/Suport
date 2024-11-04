import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// interface Tecnico {
//   id: number;
//   nome: string;
//   especialidade: string;
// }

@Component({
  selector: 'app-lista-tecnicos',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './lista-tecnico.component.html',
  styleUrls: ['./lista-tecnico.component.scss']
})
export class ListaTecnicoComponent  {
  
  tecnicos = [
    {
      nome: 'Ana Paula',
      experiencia: '5 anos',
      area: 'Desenvolvimento Frontend',
      descricao: 'Ana é especialista em desenvolvimento de interfaces de usuário e tem trabalhado em diversos projetos com Angular.'
    },
    {
      nome: 'Carlos Oliveira',
      experiencia: '7 anos',
      area: 'Desenvolvimento Backend',
      descricao: 'Carlos é um desenvolvedor backend experiente, com amplo conhecimento em Node.js e bancos de dados.'
    },
    {
      nome: 'Fernanda Beatriz',
      experiencia: '3 anos',
      area: 'Suporte Técnico',
      descricao: 'Fernanda tem experiência em atendimento ao cliente e suporte técnico, ajudando a resolver problemas rapidamente.'
    },
    {
      nome: 'João Pedro',
      experiencia: '4 anos',
      area: 'DevOps',
      descricao: 'João é especialista em práticas de DevOps, focando em automação e integração contínua.'
    },
    {
      nome: 'Maria Clara',
      experiencia: '6 anos',
      area: 'QA',
      descricao: 'Maria é engenheira de qualidade com experiência em testes automatizados e manuais.'
    },
    {
      nome: 'Pedro Rocha',
      experiencia: '8 anos',
      area: 'Desenvolvimento Mobile',
      descricao: 'Pedro é um desenvolvedor mobile com vasta experiência em Flutter e React Native.'
    },
    {
      nome: 'Lauren Mayumi',
      experiencia: '10 anos',
      area: 'Gerenciamento de Projetos',
      descricao: 'Laura tem uma sólida experiência em gerenciamento de projetos ágeis e lidera equipes em vários projetos.'
    },
    {
      nome: 'Andrei Pinto',
      experiencia: '2 anos',
      area: 'Análise de Sistemas',
      descricao: 'Ricardo é um analista de sistemas em início de carreira, focado em desenvolvimento de soluções de software.'
    },
    {
      nome: 'Juliana Gomes',
      experiencia: '9 anos',
      area: 'Segurança da Informação',
      descricao: 'Juliana é especialista em segurança da informação, com experiência em auditorias e gestão de riscos.'
    },
    {
      nome: 'Bruno Campos',
      experiencia: '5 anos',
      area: 'Design de UX/UI',
      descricao: 'Bruno é um designer de UX/UI, focado em criar experiências de usuário envolventes e intuitivas.'
    }
    
  ];
}
