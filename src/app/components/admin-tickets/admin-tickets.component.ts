import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { TicketStats } from '../../models/ticket';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-tickets.component.html',
  styleUrl: './admin-tickets.component.scss'
})
export class AdminTicketsComponent implements OnInit {
  private ticketService = inject(TicketService);
  
  ticketStats: TicketStats = {
    totalReceived: 0,
    totalOpen: 0,
    totalClosed: 0,
  };

  tableHTML: string = '';
tickets: any;

  ngOnInit() {
    this.loadTicketStats();
  }

  loadTicketStats() {
    this.ticketService.getTicketStats().subscribe({
      next: (data) => {
        this.ticketStats = data;
        this.generateTableHTML();
      },
      error: (error) => {
        console.error('Erro ao carregar estatísticas de tickets', error);
      },
    });
  }

  generateTableHTML() {
    this.tableHTML = `
      <h2>Estatísticas de Tickets</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total de Tickets Recebidos no Ano</td>
            <td>${this.ticketStats.totalReceived}</td>
          </tr>
          <tr>
            <td>Total de Tickets Abertos no Ano</td>
            <td>${this.ticketStats.totalOpen}</td>
          </tr>
          <tr>
            <td>Total de Tickets Fechados no Ano</td>
            <td>${this.ticketStats.totalClosed}</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
