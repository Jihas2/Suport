import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent  {
  tecnicos = [
    { nome: 'João Silva', especialidade: 'Redes' },
    { nome: 'Maria Oliveira', especialidade: 'Software' },
    { nome: 'Carlos Souza', especialidade: 'Hardware' },
    { nome: 'Ana Santos', especialidade: 'Segurança' }
  ];

  tecnicoSelecionado: { nome: string; especialidade: string } | null = null;

  @ViewChild('titulo') tituloInput!: ElementRef;
  @ViewChild('descricao') descricaoInput!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  abrirTicket(titulo: string, descricao: string) {
    const ticket = { titulo, descricao };

    console.log('Ticket enviado:', ticket);
    alert('Seu ticket foi enviado com sucesso!');

    this.tecnicoSelecionado = this.tecnicos[Math.floor(Math.random() * this.tecnicos.length)];

    this.cdr.detectChanges();

    this.tituloInput.nativeElement.value = '';
    this.descricaoInput.nativeElement.value = '';
  }
}