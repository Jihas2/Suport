import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketStats } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  
  API = 'http://localhost:8080/tickets'

  constructor(private http: HttpClient) {}

  countTicketsThisYear(): Observable<number> {
    return this.http.get<number>(this.API+"/ano");
  }

  countOpenTicketsThisYear(): Observable<number> {
    return this.http.get<number>(this.API+"/ano/abertos");
  }

  countClosedTicketsThisYear(): Observable<number> {
    return this.http.get<number>(this.API+"/ano/fechados");
  }

  getTicketStats(): Observable<TicketStats> {
    return new Observable<TicketStats>((observer) => {
      let stats: TicketStats = {
        totalReceived: 0,
        totalOpen: 0,
        totalClosed: 0,
      };

      this.countTicketsThisYear().subscribe((totalReceived) => {
        stats.totalReceived = totalReceived;
        this.countOpenTicketsThisYear().subscribe((totalOpen) => {
          stats.totalOpen = totalOpen;
          this.countClosedTicketsThisYear().subscribe((totalClosed) => {
            stats.totalClosed = totalClosed;
            observer.next(stats);
            observer.complete();
          });
        });
      });
    });
  }
}